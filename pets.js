/**
 * Pet Flight Guide — Landing Page Script
 * Handles: AOS animations, checklist progress, mascot tips, form handling
 */

document.addEventListener('DOMContentLoaded', () => {

    // ===== AOS (Animate on Scroll) =====
    const initAOS = () => {
        const elements = document.querySelectorAll('[data-aos]');

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('aos-visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(el => observer.observe(el));
    };

    // ===== Checklist Progress =====
    const initChecklist = () => {
        const checkboxes = document.querySelectorAll('.check-item input[type="checkbox"]');
        const progressFill = document.getElementById('progressFill');
        const progressText = document.getElementById('progressText');
        const total = checkboxes.length;

        // Load from localStorage
        const saved = JSON.parse(localStorage.getItem('petFlightChecklist') || '{}');
        checkboxes.forEach(cb => {
            const id = cb.closest('.check-item').id;
            if (saved[id]) {
                cb.checked = true;
            }
        });

        const updateProgress = () => {
            const checked = document.querySelectorAll('.check-item input:checked').length;
            const percent = (checked / total) * 100;
            progressFill.style.width = `${percent}%`;
            progressText.textContent = `${checked} из ${total} выполнено`;

            if (checked === total) {
                progressText.textContent = `🎉 Все ${total} пунктов выполнены! Вы готовы к полёту!`;
                progressFill.style.background = 'linear-gradient(90deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)';
            } else {
                progressFill.style.background = 'linear-gradient(90deg, #4ade80 0%, #22c55e 100%)';
            }

            // Save to localStorage
            const state = {};
            checkboxes.forEach(cb => {
                const id = cb.closest('.check-item').id;
                state[id] = cb.checked;
            });
            localStorage.setItem('petFlightChecklist', JSON.stringify(state));
        };

        checkboxes.forEach(cb => {
            cb.addEventListener('change', updateProgress);
        });

        updateProgress();
    };

    // ===== Mascot Random Tips =====
    const initMascot = () => {
        const mascot = document.getElementById('mascot');
        const tooltip = document.getElementById('mascotTooltip');
        const tipText = document.getElementById('mascotTip');
        const closeBtn = document.getElementById('tooltipClose');

        const tips = [
            '🐾 Знаете ли вы? Собаки-поводыри летают бесплатно и без переноски на всех российских авиакомпаниях!',
            '✈️ Лайфхак: выбирайте утренние рейсы — меньше турбулентности и стресса для питомца.',
            '💡 На рейсах длиннее 6 часов обязательно возьмите дополнительные пелёнки. Больше = спокойнее.',
            '🌡️ Летом избегайте рейсов в пиковую жару. Багажные отсеки могут перегреваться на земле.',
            '📱 Сфотографируйте все документы и сохраните копии в телефоне — на случай утери оригиналов.',
            '🧊 Заморозьте воду в поилке: она растает во время полёта и будет прохладной.',
            '🎵 За 2 недели до полёта включайте питомцу звуки самолёта на YouTube — для привыкания.',
            '🏷️ Напишите на бирке не только телефон, но и email — на случай роуминга за границей.',
            '⏰ Приезжайте в аэропорт за 3 часа до вылета — оформление документов на животное занимает время.',
            '🧸 Положите в переноску вещь с вашим запахом — так питомец будет спокойнее.',
            '📋 Некоторые страны требуют карантин при въезде. Проверьте правила заранее!',
            '💊 Ни в коем случае не давайте снотворное! Это опасно на высоте.'
        ];

        let currentTipIndex = -1;

        const showRandomTip = () => {
            let newIndex;
            do {
                newIndex = Math.floor(Math.random() * tips.length);
            } while (newIndex === currentTipIndex && tips.length > 1);

            currentTipIndex = newIndex;
            tipText.textContent = tips[currentTipIndex];
            tooltip.classList.add('visible');
        };

        mascot.addEventListener('click', (e) => {
            e.stopPropagation();
            if (tooltip.classList.contains('visible')) {
                tooltip.classList.remove('visible');
            } else {
                showRandomTip();
            }
        });

        closeBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            tooltip.classList.remove('visible');
        });

        // Close on outside click
        document.addEventListener('click', (e) => {
            if (!mascot.contains(e.target)) {
                tooltip.classList.remove('visible');
            }
        });
    };

    // ===== Lead Form =====
    const initLeadForm = () => {
        const form = document.getElementById('leadForm');
        const emailInput = document.getElementById('emailInput');
        const submitBtn = document.getElementById('submitBtn');
        const formSuccess = document.getElementById('formSuccess');

        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const email = emailInput.value.trim();
            if (!email) return;

            // Simulate submission
            submitBtn.disabled = true;
            submitBtn.querySelector('span').textContent = 'Отправка...';

            setTimeout(() => {
                form.querySelector('.form-group').style.display = 'none';
                form.querySelector('.form-note').style.display = 'none';
                formSuccess.classList.add('visible');
                submitBtn.disabled = false;
                submitBtn.querySelector('span').textContent = 'Получить чек-лист';
            }, 800);
        });
    };

    // ===== Smooth scroll for anchor links =====
    const initSmoothScroll = () => {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    };

    // ===== Parallax on hero (subtle) =====
    const initParallax = () => {
        const heroImage = document.querySelector('.hero-image-wrapper');
        if (!heroImage) return;

        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    const scrollY = window.scrollY;
                    if (scrollY < window.innerHeight) {
                        heroImage.style.transform = `translateY(${scrollY * 0.15}px)`;
                    }
                    ticking = false;
                });
                ticking = true;
            }
        });
    };

    // ===== Init all =====
    initAOS();
    initChecklist();
    initMascot();
    initLeadForm();
    initSmoothScroll();
    initParallax();
});
