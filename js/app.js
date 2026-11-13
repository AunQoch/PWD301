/**
 * FLASK WEB MASTERY - 250 ASSESSMENT REVISION APP
 * Minimalist, Clean, Distraction-Free Study Platform
 * Persistent Progress Across Tabs & Sessions
 */

(function () {
  'use strict';

  // Application State
  const state = {
    mode: 'study', // 'study' | 'exam' | 'cheatsheet' | 'starred' | 'wrong'
    currentChapter: 'all', // 'all' | 'ch1' | 'ch2' ...
    filterType: 'all', // 'all' | 'Theory' | 'Applied'
    filterCount: 'all', // 'all' | '1' | '2'
    filterStatus: 'all', // 'all' | 'starred' | 'wrong' | 'correct' | 'unanswered'
    searchQuery: '',
    isShuffled: false,
    shuffledOrder: null,

    // Exam specific persistent shuffle order
    examShuffledOrder: null,

    // User progress stored in localStorage
    userSelections: {}, // { [qId]: ['A', 'B'] }
    userResults: {}, // { [qId]: true/false }
    starredQuestions: new Set(),

    // Separate explanation visibility for study mode and exam mode
    studyOpenExplanations: new Set(),
    examUnlockedExplanations: new Set(),

    // Exam mode state
    examRunning: false,
    examSubmitted: false,
    timerSeconds: 0,
    timerInterval: null,
  };

  // Local Storage Keys
  const STORAGE_KEYS = {
    THEME: 'fwm_theme',
    STARRED: 'fwm_starred',
    SELECTIONS: 'fwm_selections',
    RESULTS: 'fwm_results',
    EXAM_SHUFFLE: 'fwm_exam_shuffle',
    EXAM_UNLOCKED: 'fwm_exam_unlocked',
    STUDY_EXPLANATIONS: 'fwm_study_exp',
    EXAM_TIMER: 'fwm_exam_timer',
    EXAM_SUBMITTED: 'fwm_exam_submitted',
    CURRENT_MODE: 'fwm_mode',
    CURRENT_CHAPTER: 'fwm_chapter'
  };

  // DOM Elements
  const DOM = {
    body: document.body,
    themeToggle: document.getElementById('theme-toggle'),
    themeText: document.getElementById('theme-text'),

    // Tabs
    tabBtns: document.querySelectorAll('.tab-btn'),

    // Stats & Progress
    statAnswered: document.getElementById('stat-answered'),
    statCorrect: document.getElementById('stat-correct'),
    statAccuracy: document.getElementById('stat-accuracy'),
    statStarredCount: document.getElementById('stat-starred-count'),
    progressFill: document.getElementById('progress-fill'),
    progressText: document.getElementById('progress-text'),

    // Sidebar
    chapterNavList: document.getElementById('chapter-nav-list'),
    qMatrixGrid: document.getElementById('q-matrix-grid'),
    sidebarPanelMatrix: document.getElementById('sidebar-matrix-panel'),
    mainContainer: document.getElementById('main-container'),

    // Toolbar
    toolbarCard: document.querySelector('.toolbar-card'),
    searchInput: document.getElementById('search-input'),
    searchClearBtn: document.getElementById('search-clear-btn'),
    chipButtons: document.querySelectorAll('.chip-btn'),
    btnShuffle: document.getElementById('btn-shuffle'),
    btnResetChapterTool: document.getElementById('btn-reset-chapter-tool'),
    btnToggleAllExp: document.getElementById('btn-toggle-all-exp'),
    btnResetAll: document.getElementById('btn-reset-all'),

    // Exam Controls
    examBanner: document.getElementById('exam-banner'),
    timerDisplay: document.getElementById('timer-display'),
    btnResetChapter: document.getElementById('btn-reset-chapter'),
    btnSubmitExam: document.getElementById('btn-submit-exam'),

    // Content Areas
    questionsContainer: document.getElementById('questions-container'),
    cheatsheetContainer: document.getElementById('cheatsheet-container'),
    emptyState: document.getElementById('empty-state'),

    // Modal
    modalOverlay: document.getElementById('modal-overlay'),
    modalCloseBtn: document.getElementById('modal-close-btn'),
    scoreNum: document.getElementById('modal-score-num'),
    scoreSummaryText: document.getElementById('modal-summary-text'),
    modalDetails: document.getElementById('modal-details'),
    btnModalRetakeChapter: document.getElementById('btn-modal-retake-chapter'),
    btnModalReviewWrong: document.getElementById('btn-modal-review-wrong'),
    btnModalRetake: document.getElementById('btn-modal-retake'),

    // Back to top
    backToTopBtn: document.getElementById('back-to-top')
  };

  // Initialize Application
  function init() {
    loadStoredData();
    initTheme();

    // Sync tab button UI with loaded mode
    DOM.tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === state.mode);
    });

    if (state.mode === 'exam') {
      if (DOM.examBanner) DOM.examBanner.style.display = 'flex';
      startExamTimer();
    } else {
      if (DOM.examBanner) DOM.examBanner.style.display = 'none';
    }

    if (DOM.sidebarPanelMatrix) {
      DOM.sidebarPanelMatrix.style.display = state.mode === 'cheatsheet' ? 'none' : 'block';
    }
    if (DOM.toolbarCard) {
      DOM.toolbarCard.style.display = state.mode === 'cheatsheet' ? 'none' : 'flex';
    }

    renderChapterNav();
    bindEvents();
    render();
  }

  // Load saved state from localStorage
  function loadStoredData() {
    try {
      const storedStarred = localStorage.getItem(STORAGE_KEYS.STARRED);
      if (storedStarred) {
        state.starredQuestions = new Set(JSON.parse(storedStarred));
      }

      const storedSelections = localStorage.getItem(STORAGE_KEYS.SELECTIONS);
      if (storedSelections) {
        state.userSelections = JSON.parse(storedSelections);
      }

      const storedResults = localStorage.getItem(STORAGE_KEYS.RESULTS);
      if (storedResults) {
        state.userResults = JSON.parse(storedResults);
      }

      const storedTimer = localStorage.getItem(STORAGE_KEYS.EXAM_TIMER);
      if (storedTimer) {
        state.timerSeconds = parseInt(storedTimer, 10) || 0;
      }

      const storedShuffle = localStorage.getItem(STORAGE_KEYS.EXAM_SHUFFLE);
      if (storedShuffle) {
        state.examShuffledOrder = JSON.parse(storedShuffle);
      } else {
        state.examShuffledOrder = [...Array(QUESTIONS_DATA.length).keys()].sort(() => Math.random() - 0.5);
      }

      const storedUnlocked = localStorage.getItem(STORAGE_KEYS.EXAM_UNLOCKED);
      if (storedUnlocked) {
        state.examUnlockedExplanations = new Set(JSON.parse(storedUnlocked));
      }

      const storedStudyExp = localStorage.getItem(STORAGE_KEYS.STUDY_EXPLANATIONS);
      if (storedStudyExp) {
        state.studyOpenExplanations = new Set(JSON.parse(storedStudyExp));
      } else {
        state.studyOpenExplanations = new Set(QUESTIONS_DATA.map(q => q.id));
      }

      const storedSubmitted = localStorage.getItem(STORAGE_KEYS.EXAM_SUBMITTED);
      if (storedSubmitted) {
        state.examSubmitted = storedSubmitted === 'true';
      }

      const storedMode = localStorage.getItem(STORAGE_KEYS.CURRENT_MODE);
      if (storedMode) {
        state.mode = storedMode;
      }

      const storedChapter = localStorage.getItem(STORAGE_KEYS.CURRENT_CHAPTER);
      if (storedChapter) {
        state.currentChapter = storedChapter;
      }
    } catch (e) {
      console.warn('Could not read from localStorage', e);
    }
  }

  // Save state to localStorage
  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEYS.STARRED, JSON.stringify(Array.from(state.starredQuestions)));
      localStorage.setItem(STORAGE_KEYS.SELECTIONS, JSON.stringify(state.userSelections));
      localStorage.setItem(STORAGE_KEYS.RESULTS, JSON.stringify(state.userResults));
      localStorage.setItem(STORAGE_KEYS.EXAM_SHUFFLE, JSON.stringify(state.examShuffledOrder));
      localStorage.setItem(STORAGE_KEYS.EXAM_UNLOCKED, JSON.stringify(Array.from(state.examUnlockedExplanations)));
      localStorage.setItem(STORAGE_KEYS.STUDY_EXPLANATIONS, JSON.stringify(Array.from(state.studyOpenExplanations)));
      localStorage.setItem(STORAGE_KEYS.EXAM_TIMER, state.timerSeconds.toString());
      localStorage.setItem(STORAGE_KEYS.EXAM_SUBMITTED, state.examSubmitted.toString());
      localStorage.setItem(STORAGE_KEYS.CURRENT_MODE, state.mode);
      localStorage.setItem(STORAGE_KEYS.CURRENT_CHAPTER, state.currentChapter);
    } catch (e) {
      console.warn('Could not save to localStorage', e);
    }
  }

  // Theme Handling
  function initTheme() {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME) ||
      (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    setTheme(savedTheme);
  }

  function setTheme(theme) {
    if (theme === 'dark') {
      DOM.body.setAttribute('data-theme', 'dark');
      if (DOM.themeText) DOM.themeText.textContent = 'Giao diện: Tối';
      if (DOM.themeToggle) DOM.themeToggle.title = 'Chuyển sang giao diện Sáng';
    } else {
      DOM.body.removeAttribute('data-theme');
      if (DOM.themeText) DOM.themeText.textContent = 'Giao diện: Sáng';
      if (DOM.themeToggle) DOM.themeToggle.title = 'Chuyển sang giao diện Tối';
    }
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }

  function toggleTheme() {
    const isDark = DOM.body.getAttribute('data-theme') === 'dark';
    setTheme(isDark ? 'light' : 'dark');
  }

  // Render Sidebar Chapter Nav
  function renderChapterNav() {
    if (!DOM.chapterNavList) return;

    let html = `
      <li>
        <a class="chapter-nav-item ${state.currentChapter === 'all' ? 'active' : ''}" data-chapter="all">
          <span>Tất cả 12 Chương</span>
          <span class="ch-badge">${QUESTIONS_DATA.length}</span>
        </a>
      </li>
    `;

    CHAPTERS_DATA.forEach(ch => {
      const qCount = QUESTIONS_DATA.filter(q => q.chapterId === ch.id).length;
      html += `
        <li>
          <a class="chapter-nav-item ${state.currentChapter === ch.id ? 'active' : ''}" data-chapter="${ch.id}">
            <span>${ch.title}</span>
            <span class="ch-badge">${qCount}</span>
          </a>
        </li>
      `;
    });

    DOM.chapterNavList.innerHTML = html;
  }

  // Event Listeners
  function bindEvents() {
    // Theme toggle
    if (DOM.themeToggle) {
      DOM.themeToggle.addEventListener('click', toggleTheme);
    }

    // Tabs switching (DOES NOT RESET PROGRESS!)
    DOM.tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetMode = btn.dataset.mode;
        switchMode(targetMode);
      });
    });

    // Chapter nav clicks (DOES NOT RESET PROGRESS!)
    if (DOM.chapterNavList) {
      DOM.chapterNavList.addEventListener('click', e => {
        const item = e.target.closest('.chapter-nav-item');
        if (item) {
          e.preventDefault();
          const targetChapter = item.dataset.chapter;
          state.currentChapter = targetChapter;
          saveState();
          renderChapterNav();

          // If in cheatsheet mode, smoothly scroll to chapter card without covering
          if (state.mode === 'cheatsheet') {
            if (targetChapter === 'all') {
              window.scrollTo({ top: 0, behavior: 'smooth' });
            } else {
              const targetCard = document.getElementById('cs-' + targetChapter);
              if (targetCard) {
                targetCard.scrollIntoView({ behavior: 'smooth', block: 'start' });
              }
            }
            return;
          }

          render();
        }
      });
    }

    // Search input
    if (DOM.searchInput) {
      DOM.searchInput.addEventListener('input', e => {
        state.searchQuery = e.target.value.trim().toLowerCase();
        if (DOM.searchClearBtn) {
          DOM.searchClearBtn.classList.toggle('visible', !!state.searchQuery);
        }
        render();
      });
    }

    if (DOM.searchClearBtn) {
      DOM.searchClearBtn.addEventListener('click', () => {
        DOM.searchInput.value = '';
        state.searchQuery = '';
        DOM.searchClearBtn.classList.remove('visible');
        render();
      });
    }

    // Filter Chips
    DOM.chipButtons.forEach(chip => {
      chip.addEventListener('click', () => {
        const filterGroup = chip.dataset.group;
        const filterVal = chip.dataset.value;

        if (filterGroup === 'type') {
          state.filterType = filterVal;
        } else if (filterGroup === 'count') {
          state.filterCount = filterVal;
        } else if (filterGroup === 'status') {
          state.filterStatus = filterVal;
        }

        document.querySelectorAll(`.chip-btn[data-group="${filterGroup}"]`).forEach(c => {
          c.classList.toggle('active', c.dataset.value === filterVal);
        });

        render();
      });
    });

    // Shuffle Button (Manual shuffle)
    if (DOM.btnShuffle) {
      DOM.btnShuffle.addEventListener('click', toggleShuffle);
    }

    // Reset Chapter Buttons (Manual explicit reset)
    if (DOM.btnResetChapter) {
      DOM.btnResetChapter.addEventListener('click', handleResetCurrentChapter);
    }
    if (DOM.btnResetChapterTool) {
      DOM.btnResetChapterTool.addEventListener('click', handleResetCurrentChapter);
    }

    // Toggle All Explanations
    if (DOM.btnToggleAllExp) {
      DOM.btnToggleAllExp.addEventListener('click', toggleAllExplanations);
    }

    // Reset All Progress (Manual explicit reset)
    if (DOM.btnResetAll) {
      DOM.btnResetAll.addEventListener('click', resetAllProgress);
    }

    // Submit Exam Button
    if (DOM.btnSubmitExam) {
      DOM.btnSubmitExam.addEventListener('click', submitExam);
    }

    // Modal Events
    if (DOM.modalCloseBtn) {
      DOM.modalCloseBtn.addEventListener('click', closeModal);
    }

    if (DOM.modalOverlay) {
      DOM.modalOverlay.addEventListener('click', e => {
        if (e.target === DOM.modalOverlay) closeModal();
      });
    }

    if (DOM.btnModalRetakeChapter) {
      DOM.btnModalRetakeChapter.addEventListener('click', () => {
        closeModal();
        handleResetCurrentChapter();
      });
    }

    if (DOM.btnModalReviewWrong) {
      DOM.btnModalReviewWrong.addEventListener('click', () => {
        closeModal();
        switchMode('wrong');
      });
    }

    if (DOM.btnModalRetake) {
      DOM.btnModalRetake.addEventListener('click', () => {
        closeModal();
        resetAllExamProgress();
      });
    }

    // Back to top
    window.addEventListener('scroll', () => {
      if (DOM.backToTopBtn) {
        DOM.backToTopBtn.classList.toggle('visible', window.scrollY > 400);
      }
    });

    if (DOM.backToTopBtn) {
      DOM.backToTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      });
    }

    // Questions container delegated clicks
    if (DOM.questionsContainer) {
      DOM.questionsContainer.addEventListener('click', handleQuestionClick);
    }

    // Question Matrix Grid clicks
    if (DOM.qMatrixGrid) {
      DOM.qMatrixGrid.addEventListener('click', e => {
        const btn = e.target.closest('.q-matrix-btn');
        if (btn) {
          const qId = parseInt(btn.dataset.qid, 10);
          scrollToQuestion(qId);
        }
      });
    }
  }

  // Generate a fresh shuffle order for exam mode
  function reshuffleExamOrder() {
    state.examShuffledOrder = [...Array(QUESTIONS_DATA.length).keys()].sort(() => Math.random() - 0.5);
    saveState();
  }

  // Switch Main Mode Tab (PRESERVES PROGRESS WITHOUT RESHUFLE OR RESET!)
  function switchMode(newMode) {
    state.mode = newMode;
    saveState();

    DOM.tabBtns.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.mode === newMode);
    });

    if (newMode === 'exam') {
      // If examShuffledOrder has not been created yet, initialize it once
      if (!state.examShuffledOrder || state.examShuffledOrder.length !== QUESTIONS_DATA.length) {
        reshuffleExamOrder();
      }
      startExamTimer();
    } else {
      stopExamTimer();
    }

    // Exam banner visibility
    if (DOM.examBanner) {
      DOM.examBanner.style.display = newMode === 'exam' ? 'flex' : 'none';
    }

    // Toolbar and matrix visibility for cheatsheet
    if (DOM.toolbarCard) {
      DOM.toolbarCard.style.display = newMode === 'cheatsheet' ? 'none' : 'flex';
    }

    if (DOM.sidebarPanelMatrix) {
      DOM.sidebarPanelMatrix.style.display = newMode === 'cheatsheet' ? 'none' : 'block';
    }

    render();
  }

  // Exam Timer
  function startExamTimer() {
    if (state.examRunning) return;
    state.examRunning = true;
    updateTimerDisplay();
    state.timerInterval = setInterval(() => {
      state.timerSeconds++;
      updateTimerDisplay();
      // Periodically persist timer every 5 seconds
      if (state.timerSeconds % 5 === 0) {
        localStorage.setItem(STORAGE_KEYS.EXAM_TIMER, state.timerSeconds.toString());
      }
    }, 1000);
  }

  function stopExamTimer() {
    state.examRunning = false;
    if (state.timerInterval) {
      clearInterval(state.timerInterval);
      state.timerInterval = null;
    }
    localStorage.setItem(STORAGE_KEYS.EXAM_TIMER, state.timerSeconds.toString());
  }

  function updateTimerDisplay() {
    if (!DOM.timerDisplay) return;
    const mins = Math.floor(state.timerSeconds / 60);
    const secs = state.timerSeconds % 60;
    DOM.timerDisplay.textContent = `Thời gian: ${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  }

  // Shuffle Questions Toggle (Manual)
  function toggleShuffle() {
    if (state.mode === 'exam') {
      // In exam mode, reshuffle the exam order
      reshuffleExamOrder();
      render();
      showToast('Đã xáo trộn ngẫu nhiên thứ tự câu hỏi bài thi!');
      return;
    }

    // In study mode
    state.isShuffled = !state.isShuffled;
    if (state.isShuffled) {
      state.shuffledOrder = [...Array(QUESTIONS_DATA.length).keys()].sort(() => Math.random() - 0.5);
      if (DOM.btnShuffle) {
        DOM.btnShuffle.classList.add('active');
        DOM.btnShuffle.textContent = 'Đã xáo trộn';
      }
      showToast('Đã xáo trộn ngẫu nhiên thứ tự câu hỏi!');
    } else {
      state.shuffledOrder = null;
      if (DOM.btnShuffle) {
        DOM.btnShuffle.classList.remove('active');
        DOM.btnShuffle.textContent = 'Xáo trộn câu hỏi';
      }
      showToast('Đã khôi phục thứ tự câu hỏi gốc!');
    }
    render();
  }

  // Manual Reset: Reset / Retake current chapter test
  function handleResetCurrentChapter() {
    let targetChapter = state.currentChapter;
    let chapterName = 'chương hiện tại';

    if (targetChapter === 'all') {
      const confirmAll = confirm('Bạn đang xem "Tất cả 12 Chương". Bạn có muốn làm lại toàn bộ bài thi và xáo trộn ngẫu nhiên câu hỏi không?');
      if (!confirmAll) return;
      resetAllExamProgress();
      return;
    }

    const chObj = CHAPTERS_DATA.find(c => c.id === targetChapter);
    if (chObj) chapterName = chObj.title;

    const confirmed = confirm(`Bạn có chắc chắn muốn làm lại bài thi của ${chapterName}? Toàn bộ câu trả lời của chương này sẽ được xóa và các câu hỏi sẽ được xáo trộn mới.`);
    if (!confirmed) return;

    // Reset user answers and unlocked explanations for this chapter only
    state.examSubmitted = false;
    const chapterQuestions = QUESTIONS_DATA.filter(q => q.chapterId === targetChapter);
    chapterQuestions.forEach(q => {
      delete state.userSelections[q.id];
      delete state.userResults[q.id];
      state.examUnlockedExplanations.delete(q.id);
    });

    // Generate fresh shuffle for this retake
    reshuffleExamOrder();

    saveState();
    updateStatsBar();
    renderQuestionMatrix();
    render();

    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast(`Đã làm mới bài làm của ${chapterName}. Thứ tự câu hỏi đã được xáo trộn!`);
  }

  // Manual Reset: Reset entire exam progress
  function resetAllExamProgress() {
    state.userSelections = {};
    state.userResults = {};
    state.examUnlockedExplanations.clear();
    state.examSubmitted = false;
    state.timerSeconds = 0;
    updateTimerDisplay();

    // Re-shuffle order
    reshuffleExamOrder();

    saveState();
    startExamTimer();
    render();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    showToast('Đã đặt lại bài thi. Thứ tự câu hỏi mới đã được xáo trộn!');
  }

  // Manual Reset: Reset All Progress completely
  function resetAllProgress() {
    if (confirm('Bạn có chắc chắn muốn đặt lại toàn bộ tiến độ làm bài? (Các câu đã gắn sao vẫn được giữ nguyên)')) {
      state.userSelections = {};
      state.userResults = {};
      state.examUnlockedExplanations.clear();
      state.studyOpenExplanations = new Set(QUESTIONS_DATA.map(q => q.id));
      state.examSubmitted = false;
      state.timerSeconds = 0;
      updateTimerDisplay();
      reshuffleExamOrder();
      saveState();
      render();
      showToast('Đã đặt lại toàn bộ tiến độ làm bài.');
    }
  }

  // Determine if a question's explanation should be visible
  function isExplanationOpen(qId) {
    if (state.mode === 'exam') {
      // In exam mode: ONLY show explanation IF AND ONLY IF user has chosen an answer!
      const hasAnswered = Boolean(state.userSelections[qId] && state.userSelections[qId].length > 0);
      if (!hasAnswered) {
        return false;
      }
      return state.examUnlockedExplanations.has(qId);
    } else {
      // In study mode or other modes: controlled by studyOpenExplanations
      return state.studyOpenExplanations.has(qId);
    }
  }

  // Toggle All Explanations
  function toggleAllExplanations() {
    const currentQuestions = getFilteredQuestions();

    if (state.mode === 'exam') {
      const answeredQuestions = currentQuestions.filter(q => state.userSelections[q.id] && state.userSelections[q.id].length > 0);
      if (answeredQuestions.length === 0) {
        showToast('Chưa có câu nào được trả lời. Hãy chọn đáp án để xem giải thích!');
        return;
      }
      const allOpen = answeredQuestions.every(q => state.examUnlockedExplanations.has(q.id));
      if (allOpen) {
        answeredQuestions.forEach(q => state.examUnlockedExplanations.delete(q.id));
        if (DOM.btnToggleAllExp) DOM.btnToggleAllExp.textContent = 'Hiện tất cả giải thích';
        showToast('Đã ẩn giải thích các câu đã làm.');
      } else {
        answeredQuestions.forEach(q => state.examUnlockedExplanations.add(q.id));
        if (DOM.btnToggleAllExp) DOM.btnToggleAllExp.textContent = 'Ẩn tất cả giải thích';
        showToast('Đã hiển thị giải thích các câu đã làm.');
      }
      saveState();
      renderQuestionsList(currentQuestions);
      return;
    }

    const allOpen = currentQuestions.every(q => state.studyOpenExplanations.has(q.id));
    if (allOpen) {
      currentQuestions.forEach(q => state.studyOpenExplanations.delete(q.id));
      if (DOM.btnToggleAllExp) DOM.btnToggleAllExp.textContent = 'Hiện tất cả giải thích';
      showToast('Đã ẩn giải thích toàn bộ câu hỏi.');
    } else {
      currentQuestions.forEach(q => state.studyOpenExplanations.add(q.id));
      if (DOM.btnToggleAllExp) DOM.btnToggleAllExp.textContent = 'Ẩn tất cả giải thích';
      showToast('Đã hiển thị giải thích toàn bộ câu hỏi.');
    }
    saveState();
    renderQuestionsList(currentQuestions);
  }

  // Scroll to question
  function scrollToQuestion(qId) {
    const el = document.getElementById(`question-card-${qId}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el.classList.add('highlight');
      setTimeout(() => el.classList.remove('highlight'), 1800);
    } else {
      const targetQ = QUESTIONS_DATA.find(q => q.id === qId);
      if (targetQ) {
        state.currentChapter = targetQ.chapterId;
        saveState();
        renderChapterNav();
        render();
        setTimeout(() => {
          const card = document.getElementById(`question-card-${qId}`);
          if (card) {
            card.scrollIntoView({ behavior: 'smooth', block: 'center' });
            card.classList.add('highlight');
            setTimeout(() => card.classList.remove('highlight'), 1800);
          }
        }, 150);
      }
    }
  }

  // Handle Question Card Clicks (Options, Star, Toggle Exp, Check, Copy)
  function handleQuestionClick(e) {
    // Copy question button
    const copyBtn = e.target.closest('.btn-copy');
    if (copyBtn) {
      const qId = parseInt(copyBtn.dataset.qid, 10);
      copyQuestionToClipboard(qId);
      return;
    }

    // Star bookmark button
    const starBtn = e.target.closest('.btn-star');
    if (starBtn) {
      const qId = parseInt(starBtn.dataset.qid, 10);
      toggleStar(qId);
      return;
    }

    // Toggle Explanation button
    const expToggleBtn = e.target.closest('.btn-toggle-exp');
    if (expToggleBtn) {
      const qId = parseInt(expToggleBtn.dataset.qid, 10);
      toggleExplanation(qId);
      return;
    }

    // Check Answer button (for 2-answers question confirmation)
    const checkBtn = e.target.closest('.btn-check-answer');
    if (checkBtn) {
      const qId = parseInt(checkBtn.dataset.qid, 10);
      checkSingleQuestion(qId);
      return;
    }

    // Option item click
    const optItem = e.target.closest('.option-item');
    if (optItem) {
      const qId = parseInt(optItem.dataset.qid, 10);
      const optKey = optItem.dataset.key;
      handleOptionSelect(qId, optKey);
      return;
    }
  }

  // Copy question to clipboard
  function copyQuestionToClipboard(qId) {
    const q = QUESTIONS_DATA.find(item => item.id === qId);
    if (!q) return;

    let text = `[Câu ${q.id}] (${q.chapterTitle})\n`;
    text += `${q.question}\n\n`;
    q.options.forEach(opt => {
      text += `${opt.key}. ${opt.text}${opt.isCorrect ? ' [Đáp án đúng]' : ''}\n`;
    });
    text += `\nGiải thích chi tiết: ${q.explanation}\n`;

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`Đã sao chép Câu ${q.id} vào bộ nhớ tạm!`);
      }).catch(() => {
        fallbackCopyText(text, q.id);
      });
    } else {
      fallbackCopyText(text, q.id);
    }
  }

  function fallbackCopyText(text, qId) {
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    try {
      document.execCommand('copy');
      showToast(`Đã sao chép Câu ${qId} vào bộ nhớ tạm!`);
    } catch (e) {
      alert('Vui lòng cấp quyền sao chép.');
    }
    document.body.removeChild(textarea);
  }

  function showToast(msg) {
    let toast = document.getElementById('toast-notice');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'toast-notice';
      toast.className = 'toast-notice';
      document.body.appendChild(toast);
    }
    toast.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 2200);
  }

  // Toggle Star
  function toggleStar(qId) {
    if (state.starredQuestions.has(qId)) {
      state.starredQuestions.delete(qId);
    } else {
      state.starredQuestions.add(qId);
    }
    saveState();
    updateStatsBar();
    renderQuestionMatrix();

    const starBtn = document.querySelector(`.btn-star[data-qid="${qId}"]`);
    if (starBtn) {
      const isStarred = state.starredQuestions.has(qId);
      starBtn.classList.toggle('active', isStarred);
      starBtn.textContent = isStarred ? 'Đã lưu' : 'Lưu';
    }

    if (state.mode === 'starred' || state.filterStatus === 'starred') {
      render();
    }
  }

  // Toggle Explanation visibility
  function toggleExplanation(qId) {
    if (state.mode === 'exam') {
      const hasAnswered = Boolean(state.userSelections[qId] && state.userSelections[qId].length > 0);
      if (!hasAnswered) {
        showToast('Vui lòng chọn câu trả lời trước khi xem giải thích!');
        return;
      }
      if (state.examUnlockedExplanations.has(qId)) {
        state.examUnlockedExplanations.delete(qId);
      } else {
        state.examUnlockedExplanations.add(qId);
      }
    } else {
      if (state.studyOpenExplanations.has(qId)) {
        state.studyOpenExplanations.delete(qId);
      } else {
        state.studyOpenExplanations.add(qId);
      }
    }
    saveState();

    const expBox = document.getElementById(`exp-box-${qId}`);
    const toggleBtn = document.querySelector(`.btn-toggle-exp[data-qid="${qId}"]`);
    if (expBox && toggleBtn) {
      const isOpen = isExplanationOpen(qId);
      expBox.style.display = isOpen ? 'flex' : 'none';
      toggleBtn.textContent = isOpen ? 'Ẩn giải thích' : 'Hiện giải thích';
    }
  }

  // Handle Option Selection and Auto-Reveal Explanation in Exam Mode
  function handleOptionSelect(qId, optKey) {
    const q = QUESTIONS_DATA.find(item => item.id === qId);
    if (!q) return;

    let selected = state.userSelections[qId] ? [...state.userSelections[qId]] : [];

    if (q.correctCount === 1) {
      // Single choice
      selected = [optKey];
      state.userSelections[qId] = selected;

      // Evaluate answer correctness
      evaluateQuestion(qId);

      // Automatically unlock explanation in exam mode after selecting
      state.examUnlockedExplanations.add(qId);
    } else {
      // Multi-choice (2 answers)
      if (selected.includes(optKey)) {
        selected = selected.filter(k => k !== optKey);
        delete state.userResults[qId];
      } else {
        if (selected.length < q.correctCount) {
          selected.push(optKey);
        } else {
          selected.shift();
          selected.push(optKey);
        }
      }
      state.userSelections[qId] = selected;

      // If user has selected both required choices, evaluate and reveal explanation immediately!
      if (selected.length === q.correctCount) {
        evaluateQuestion(qId);
        state.examUnlockedExplanations.add(qId);
      }
    }

    saveState();
    updateStatsBar();
    renderQuestionMatrix();
    updateQuestionCardUI(qId);
  }

  // Check Single Question manually
  function checkSingleQuestion(qId) {
    const selected = state.userSelections[qId] || [];
    const q = QUESTIONS_DATA.find(item => item.id === qId);
    if (!q) return;

    if (selected.length === 0) {
      alert('Vui lòng chọn đáp án trước khi bấm Kiểm tra!');
      return;
    }

    if (q.correctCount === 2 && selected.length < 2) {
      alert('Câu này yêu cầu chọn đủ 2 đáp án đúng.');
      return;
    }

    evaluateQuestion(qId);
    state.examUnlockedExplanations.add(qId);
    saveState();
    updateStatsBar();
    renderQuestionMatrix();
    updateQuestionCardUI(qId);
  }

  // Evaluate Question correctness
  function evaluateQuestion(qId) {
    const q = QUESTIONS_DATA.find(item => item.id === qId);
    if (!q) return;

    const selected = state.userSelections[qId] || [];
    const correct = q.correctKeys;

    const isCorrect = (
      selected.length === correct.length &&
      selected.every(k => correct.includes(k))
    );

    state.userResults[qId] = isCorrect;
  }

  // Update a single Question Card in DOM
  function updateQuestionCardUI(qId) {
    const card = document.getElementById(`question-card-${qId}`);
    if (!card) return;

    const q = QUESTIONS_DATA.find(item => item.id === qId);
    if (!q) return;

    const selected = state.userSelections[qId] || [];
    const hasEvaluated = state.userResults.hasOwnProperty(qId);
    const isCorrect = state.userResults[qId];

    // Options
    const optItems = card.querySelectorAll('.option-item');
    optItems.forEach(item => {
      const key = item.dataset.key;
      const isSelected = selected.includes(key);
      const isAnsCorrect = q.correctKeys.includes(key);

      item.className = 'option-item';

      if (state.mode === 'study') {
        if (isAnsCorrect) item.classList.add('is-correct');
      } else {
        // Exam mode
        if (isSelected) item.classList.add('selected');

        if (hasEvaluated) {
          if (isSelected && isAnsCorrect) {
            item.classList.add('user-correct');
          } else if (isSelected && !isAnsCorrect) {
            item.classList.add('user-wrong');
          } else if (!isSelected && isAnsCorrect) {
            item.classList.add('missed-correct');
          }
        }
      }
    });

    // Check button state
    const checkBtn = card.querySelector('.btn-check-answer');
    if (checkBtn) {
      if (hasEvaluated) {
        checkBtn.textContent = isCorrect ? 'Đúng' : 'Chưa đúng';
        checkBtn.style.background = isCorrect ? '#16a34a' : '#dc2626';
      } else {
        checkBtn.textContent = 'Kiểm tra';
        checkBtn.style.background = '';
      }
    }

    // Explanation Box - Automatically revealed after answering
    const expBox = document.getElementById(`exp-box-${qId}`);
    const toggleBtn = card.querySelector('.btn-toggle-exp');
    const hasAnswered = selected.length > 0;
    const isVisible = isExplanationOpen(qId);

    if (expBox) {
      expBox.style.display = isVisible ? 'flex' : 'none';
    }
    if (toggleBtn) {
      if (state.mode === 'exam') {
        toggleBtn.style.display = hasAnswered ? 'inline-flex' : 'none';
      } else {
        toggleBtn.style.display = 'inline-flex';
      }
      toggleBtn.textContent = isVisible ? 'Ẩn giải thích' : 'Hiện giải thích';
    }
  }

  // Submit Exam
  function submitExam() {
    const questions = getFilteredQuestions();
    const answeredCount = questions.filter(q => state.userSelections[q.id] && state.userSelections[q.id].length > 0).length;

    if (answeredCount < questions.length) {
      if (!confirm(`Bạn mới trả lời ${answeredCount}/${questions.length} câu. Bạn có muốn nộp bài thi ngay không?`)) {
        return;
      }
    }

    stopExamTimer();
    state.examSubmitted = true;

    // Evaluate all questions and reveal all explanations
    let correctCount = 0;
    questions.forEach(q => {
      evaluateQuestion(q.id);
      state.examUnlockedExplanations.add(q.id);
      if (state.userResults[q.id]) correctCount++;
    });

    saveState();
    updateStatsBar();
    renderQuestionMatrix();
    render();

    showScoreModal(correctCount, questions.length);
  }

  // Score Modal
  function showScoreModal(correct, total) {
    if (!DOM.modalOverlay) return;

    const pct = Math.round((correct / total) * 100);
    const score10 = ((correct / total) * 10).toFixed(1);

    if (DOM.scoreNum) DOM.scoreNum.textContent = `${score10}`;

    let grade = 'Xuất sắc';
    let gradeDesc = 'Bạn đã nắm vững toàn bộ kiến thức trong đề thi.';
    if (pct < 50) {
      grade = 'Cần ôn luyện thêm';
      gradeDesc = 'Hãy xem lại các câu làm sai và đọc kỹ phần giải thích chi tiết.';
    } else if (pct < 70) {
      grade = 'Khá';
      gradeDesc = 'Kết quả tốt. Hãy củng cố thêm các câu hỏi code và ứng dụng.';
    } else if (pct < 90) {
      grade = 'Giỏi';
      gradeDesc = 'Kiến thức rất vững vàng, sẵn sàng cho kỳ thi.';
    }

    if (DOM.scoreSummaryText) {
      DOM.scoreSummaryText.innerHTML = `<strong>${grade}</strong><br><span style="color: var(--text-muted); font-size: 0.88rem;">${gradeDesc}</span>`;
    }

    const mins = Math.floor(state.timerSeconds / 60);
    const secs = state.timerSeconds % 60;
    const timeStr = `${mins} phút ${secs} giây`;

    if (DOM.modalDetails) {
      DOM.modalDetails.innerHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.75rem; margin-top: 1rem; font-size: 0.9rem;">
          <div style="background: var(--bg-card-subtle); padding: 0.75rem; border-radius: 8px;">
            <div style="color: var(--text-muted); font-size: 0.75rem;">Số câu đúng</div>
            <div style="font-size: 1.25rem; font-weight: 800; color: var(--success);">${correct} / ${total}</div>
          </div>
          <div style="background: var(--bg-card-subtle); padding: 0.75rem; border-radius: 8px;">
            <div style="color: var(--text-muted); font-size: 0.75rem;">Tỷ lệ chính xác</div>
            <div style="font-size: 1.25rem; font-weight: 800; color: var(--primary);">${pct}%</div>
          </div>
          <div style="background: var(--bg-card-subtle); padding: 0.75rem; border-radius: 8px;">
            <div style="color: var(--text-muted); font-size: 0.75rem;">Số câu làm sai</div>
            <div style="font-size: 1.25rem; font-weight: 800; color: var(--danger);">${total - correct}</div>
          </div>
          <div style="background: var(--bg-card-subtle); padding: 0.75rem; border-radius: 8px;">
            <div style="color: var(--text-muted); font-size: 0.75rem;">Thời gian làm bài</div>
            <div style="font-size: 1.1rem; font-weight: 700; color: var(--text-main);">${timeStr}</div>
          </div>
        </div>
      `;
    }

    DOM.modalOverlay.classList.add('open');
  }

  function closeModal() {
    if (DOM.modalOverlay) {
      DOM.modalOverlay.classList.remove('open');
    }
  }

  // Filter Questions based on current state
  function getFilteredQuestions() {
    let list = QUESTIONS_DATA;

    // Mode specific filters
    if (state.mode === 'starred') {
      list = list.filter(q => state.starredQuestions.has(q.id));
    } else if (state.mode === 'wrong') {
      list = list.filter(q => state.userResults.hasOwnProperty(q.id) && state.userResults[q.id] === false);
    }

    // Chapter filter
    if (state.currentChapter !== 'all') {
      list = list.filter(q => q.chapterId === state.currentChapter);
    }

    // Type filter
    if (state.filterType !== 'all') {
      list = list.filter(q => q.type === state.filterType);
    }

    // Count filter
    if (state.filterCount !== 'all') {
      const targetCount = parseInt(state.filterCount, 10);
      list = list.filter(q => q.correctCount === targetCount);
    }

    // Status filter
    if (state.filterStatus === 'starred') {
      list = list.filter(q => state.starredQuestions.has(q.id));
    } else if (state.filterStatus === 'wrong') {
      list = list.filter(q => state.userResults.hasOwnProperty(q.id) && state.userResults[q.id] === false);
    } else if (state.filterStatus === 'correct') {
      list = list.filter(q => state.userResults[q.id] === true);
    } else if (state.filterStatus === 'unanswered') {
      list = list.filter(q => !state.userSelections[q.id] || state.userSelections[q.id].length === 0);
    }

    // Search query
    if (state.searchQuery) {
      const qLower = state.searchQuery;
      list = list.filter(q => {
        return (
          q.id.toString() === qLower ||
          q.question.toLowerCase().includes(qLower) ||
          q.explanation.toLowerCase().includes(qLower) ||
          q.options.some(opt => opt.text.toLowerCase().includes(qLower))
        );
      });
    }

    // Shuffling: In Exam mode, ALWAYS use the stable persistent examShuffledOrder
    const activeShuffleOrder = (state.mode === 'exam')
      ? state.examShuffledOrder
      : (state.isShuffled ? state.shuffledOrder : null);

    if (activeShuffleOrder) {
      const indexed = list.map(item => ({ item, index: activeShuffleOrder[item.id - 1] ?? item.id }));
      indexed.sort((a, b) => a.index - b.index);
      return indexed.map(entry => entry.item);
    }

    return list;
  }

  // Format inline code snippets
  function formatCodeSnippet(text) {
    if (!text) return '';
    return text.replace(/`([^`]+)`/g, '<code>$1</code>');
  }

  // Render main view
  function render() {
    updateStatsBar();
    renderQuestionMatrix();

    if (DOM.toolbarCard) {
      DOM.toolbarCard.style.display = state.mode === 'cheatsheet' ? 'none' : 'flex';
    }

    if (state.mode === 'cheatsheet') {
      if (DOM.questionsContainer) DOM.questionsContainer.style.display = 'none';
      if (DOM.emptyState) DOM.emptyState.style.display = 'none';
      if (DOM.cheatsheetContainer) {
        DOM.cheatsheetContainer.style.display = 'flex';
        renderCheatSheet();
      }
      return;
    }

    if (DOM.cheatsheetContainer) DOM.cheatsheetContainer.style.display = 'none';

    const questions = getFilteredQuestions();

    if (questions.length === 0) {
      if (DOM.questionsContainer) DOM.questionsContainer.style.display = 'none';
      if (DOM.emptyState) {
        DOM.emptyState.style.display = 'flex';
        const msg = state.mode === 'starred'
          ? 'Bạn chưa lưu câu hỏi nào. Bấm nút "Lưu" ở mỗi câu để thêm vào danh sách ôn tập.'
          : state.mode === 'wrong'
          ? 'Hiện tại không có câu nào làm sai.'
          : 'Không tìm thấy câu hỏi nào phù hợp với bộ lọc hiện tại.';
        document.getElementById('empty-desc').textContent = msg;
      }
      return;
    }

    if (DOM.emptyState) DOM.emptyState.style.display = 'none';
    if (DOM.questionsContainer) {
      DOM.questionsContainer.style.display = 'flex';
      renderQuestionsList(questions);
    }
  }

  // Render Question List
  function renderQuestionsList(questions) {
    let currentChId = null;
    let html = '';
    const isExam = state.mode === 'exam';

    questions.forEach((q, idx) => {
      // Add Chapter Header divider if viewing All and not shuffled in study mode
      if (state.currentChapter === 'all' && q.chapterId !== currentChId && !state.isShuffled && !isExam && !state.searchQuery) {
        currentChId = q.chapterId;
        const chData = CHAPTERS_DATA.find(c => c.id === currentChId);
        if (chData) {
          html += `
            <div class="chapter-header-card">
              <div class="chapter-header-top">
                <h3 class="chapter-header-title">${chData.title}</h3>
                <span class="q-badge q-badge-chapter">${chData.badge}</span>
              </div>
              <p class="chapter-header-summary">${chData.summary}</p>
            </div>
          `;
        }
      }

      const isStarred = state.starredQuestions.has(q.id);
      const isMulti = q.correctCount > 1;
      const selected = state.userSelections[q.id] || [];
      const hasEvaluated = state.userResults.hasOwnProperty(q.id);
      const isCorrect = state.userResults[q.id];
      const isExpOpen = isExplanationOpen(q.id);

      let optionsHtml = '';
      q.options.forEach(opt => {
        const isSelected = selected.includes(opt.key);
        const isAnsCorrect = q.correctKeys.includes(opt.key);

        let optClass = 'option-item';
        let badgeHtml = '';

        if (state.mode === 'study') {
          if (isAnsCorrect) {
            optClass += ' is-correct';
            badgeHtml = `<span class="correct-tag">[Đáp án đúng]</span>`;
          }
        } else {
          // Exam Mode
          if (isSelected) optClass += ' selected';
          if (hasEvaluated) {
            if (isSelected && isAnsCorrect) {
              optClass += ' user-correct';
            } else if (isSelected && !isAnsCorrect) {
              optClass += ' user-wrong';
            } else if (!isSelected && isAnsCorrect) {
              optClass += ' missed-correct';
              badgeHtml = `<span class="correct-tag">[Đáp án đúng]</span>`;
            }
          }
        }

        optionsHtml += `
          <div class="${optClass}" data-qid="${q.id}" data-key="${opt.key}">
            <div class="opt-radio-box">${opt.key}</div>
            <div class="opt-text">${formatCodeSnippet(opt.text)} ${badgeHtml}</div>
          </div>
        `;
      });

      // Actions / Check button for multi-choice in exam mode
      let examCheckBtnHtml = '';
      if (isExam && isMulti) {
        let btnText = 'Kiểm tra';
        let btnBg = '';
        if (hasEvaluated) {
          btnText = isCorrect ? 'Đúng' : 'Chưa đúng';
          btnBg = isCorrect ? 'style="background: #16a34a;"' : 'style="background: #dc2626;"';
        }
        examCheckBtnHtml = `
          <button class="btn-check-answer" data-qid="${q.id}" ${btnBg}>${btnText}</button>
        `;
      }

      const showExpBox = isExpOpen ? 'flex' : 'none';
      const expBtnText = isExpOpen ? 'Ẩn giải thích' : 'Hiện giải thích';
      const orderLabel = isExam ? `Câu ${idx + 1} (Gốc: Câu ${q.id})` : `Câu ${q.id}`;
      const hasAnswered = selected.length > 0;
      const expBtnDisplay = (!isExam || hasAnswered) ? 'inline-flex' : 'none';

      html += `
        <div class="question-card mode-${state.mode} ${isMulti ? 'multi-choice' : ''}" id="question-card-${q.id}" data-qid="${q.id}">
          <div class="q-header">
            <div class="q-tags">
              <span class="q-badge q-badge-num">${orderLabel}</span>
              <span class="q-badge q-badge-chapter">${q.chapterTitle.split(':')[0]}</span>
              <span class="q-badge q-badge-type">${q.type === 'Theory' ? 'Lý thuyết' : 'Code / Ứng dụng'}</span>
              <span class="q-badge q-badge-count">${q.correctCount === 1 ? '1 đáp án' : '2 đáp án đúng'}</span>
            </div>
            <div class="q-actions">
              <button class="btn-copy" data-qid="${q.id}" title="Sao chép câu hỏi">Copy</button>
              <button class="btn-star ${isStarred ? 'active' : ''}" data-qid="${q.id}">
                ${isStarred ? 'Đã lưu' : 'Lưu'}
              </button>
            </div>
          </div>

          <div class="q-title">${formatCodeSnippet(q.question)}</div>

          <div class="q-options">
            ${optionsHtml}
          </div>

          <div class="q-footer">
            <div class="q-footer-toolbar">
              <div>${examCheckBtnHtml}</div>
              <button class="btn-toggle-exp" data-qid="${q.id}" style="display: ${expBtnDisplay};">${expBtnText}</button>
            </div>

            <div class="explanation-box" id="exp-box-${q.id}" style="display: ${showExpBox};">
              <div class="explanation-header">
                <span>Giải thích chi tiết:</span>
              </div>
              <div class="explanation-content">${formatCodeSnippet(q.explanation)}</div>
            </div>
          </div>
        </div>
      `;
    });

    DOM.questionsContainer.innerHTML = html;
  }

  // Render Cheat Sheet Mode
  function renderCheatSheet() {
    if (!DOM.cheatsheetContainer) return;

    let html = `
      <div class="cs-card" style="border-left: 4px solid var(--primary);">
        <h2 style="font-size: 1.25rem; font-weight: 800; color: var(--text-main);">
          Sổ tay trọng tâm ôn thi 12 chương Flask Web
        </h2>
        <p style="font-size: 0.9rem; color: var(--text-sub);">
          Tổng hợp tất cả các kiến thức cốt lõi, khái niệm căn bản và các điểm cần lưu ý khi làm bài thi.
        </p>
      </div>
      <div class="cheatsheet-grid">
    `;

    CHAPTERS_DATA.forEach(ch => {
      const itemsHtml = ch.keyTakeaways.map(t => `
        <li class="cs-item">
          <span style="color: var(--primary); font-weight: bold; margin-right: 0.4rem;">-</span>
          <div>${formatCodeSnippet(t)}</div>
        </li>
      `).join('');

      html += `
        <div class="cs-card" id="cs-${ch.id}">
          <div class="cs-header">
            <h3 class="cs-title">${ch.title}</h3>
            <span class="cs-badge">${ch.badge}</span>
          </div>
          <div class="cs-summary">${ch.summary}</div>
          <ul class="cs-list">
            ${itemsHtml}
          </ul>
        </div>
      `;
    });

    html += `</div>`;
    DOM.cheatsheetContainer.innerHTML = html;
  }

  // Render Question Grid in Sidebar
  function renderQuestionMatrix() {
    if (!DOM.qMatrixGrid) return;

    let html = '';
    const filteredIds = new Set(getFilteredQuestions().map(q => q.id));

    QUESTIONS_DATA.forEach(q => {
      let cls = 'q-matrix-btn';
      if (state.userResults.hasOwnProperty(q.id)) {
        cls += state.userResults[q.id] ? ' correct' : ' incorrect';
      }
      if (state.starredQuestions.has(q.id)) {
        cls += ' starred';
      }

      const isVisible = filteredIds.has(q.id);
      const opacityStyle = isVisible ? '' : 'style="opacity: 0.3;"';

      html += `
        <button class="${cls}" data-qid="${q.id}" ${opacityStyle} title="Câu ${q.id} (${q.chapterTitle})">
          ${q.id}
        </button>
      `;
    });

    DOM.qMatrixGrid.innerHTML = html;
  }

  // Update Top Stats & Progress Bar
  function updateStatsBar() {
    const totalQ = QUESTIONS_DATA.length;
    const answeredCount = Object.keys(state.userSelections).filter(id => state.userSelections[id] && state.userSelections[id].length > 0).length;
    const correctCount = Object.values(state.userResults).filter(v => v === true).length;
    const starredCount = state.starredQuestions.size;
    const accuracy = answeredCount > 0 ? Math.round((correctCount / answeredCount) * 100) : 0;
    const progressPct = Math.round((answeredCount / totalQ) * 100);

    if (DOM.statAnswered) DOM.statAnswered.textContent = `${answeredCount}/${totalQ}`;
    if (DOM.statCorrect) DOM.statCorrect.textContent = `${correctCount}`;
    if (DOM.statAccuracy) DOM.statAccuracy.textContent = `${accuracy}%`;
    if (DOM.statStarredCount) DOM.statStarredCount.textContent = `${starredCount}`;

    if (DOM.progressFill) DOM.progressFill.style.width = `${progressPct}%`;
    if (DOM.progressText) DOM.progressText.textContent = `${progressPct}%`;

    const starredBadge = document.getElementById('tab-starred-badge');
    if (starredBadge) starredBadge.textContent = starredCount;

    const wrongCount = Object.values(state.userResults).filter(v => v === false).length;
    const wrongBadge = document.getElementById('tab-wrong-badge');
    if (wrongBadge) wrongBadge.textContent = wrongCount;
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
