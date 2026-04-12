// ── HOTEL DATA ──────────────────────────────────────────────
const HOTELS = {
  'taj-coral': {
    badge:'free', badgeText:'Церемония в подарок',
    name:'Taj Coral Reef Resort & Spa',
    location:'Северный Мале', stars:5,
    img:'img/h1_taj_coral.png',
    tagline:'Новый отель 2023 г. · Премиум-бренд Индии',
    period:'Бронирование: до 30 сент. 2026 · Проживание: 1 апр. — 31 окт. 2026',
    includes:['Цветочная арка','Живая музыка','Торт','Шампанское','Спа-процедуры','Фотосессия'],
    price:'350–500 тыс. ₽', priceNote:'/чел. за 7 ночей',
    rooms:'Виллы на воде и пляжные бунгало с личным бассейном и прямым выходом в лагуну. Минималистичный дизайн 2023 года, умный дом, панорамные ванные.',
    food:'4 ресторана: главный с шведским столом, морепродукты на пирсе, японская кухня, коктейль-бар на закате над водой.',
    territory:'Небольшой уютный остров, 100% пляж — белый песок без камней. Основной бассейн с баром, спа с аюрведой.',
    airport:'~25 мин. на спидботе от Male Int\'l (MLE)',
    features:['Акция 2026 — полный пакет церемонии в подарок','Бренд Taj Hotels — стандарт настоящей роскоши','Один из самых новых отелей Мальдив (2023 г.)','Аюрведическое спа от мастеров из Кералы','Персональный батлер для пары'],
    pros:['Самый новый отель в подборке — всё с иголочки','Церемония полностью бесплатная от 7 ночей','Высокое качество сервиса индийского люкс-бренда','Отличное соотношение цена/качество для ★★★★★']
  },
  'taj-exotica': {
    badge:'free', badgeText:'Церемония в подарок',
    name:'Taj Exotica Resort & Spa Maldives',
    location:'Южный Мале', stars:5,
    img:'img/h2_taj_exotica.png',
    tagline:'Бесплатная церемония · Личный батлер · Закатный круиз',
    period:'Бронирование: до 30 сент. 2026 · Проживание: 1 апр. — 31 окт. 2026',
    includes:['Цветочная арка','Живая музыка','Торт','Шампанское','Спа для пар','Закатный круиз','Личный батлер'],
    price:'350–500 тыс. ₽', priceNote:'/чел. за 7 ночей',
    rooms:'Лагунные и пляжные виллы с стеклянным полом над рифом, собственным бассейном, лежанками над водой.',
    food:'2 ресторана, оба с видом на лагуну. Романтический ужин прямо на мелководье под звёздами — по запросу.',
    territory:'Остров с кристально чистой лагуной, видимость под водой 20+ метров. Рифовая экосистема в шаговой доступности от виллы.',
    airport:'~20 мин. на спидботе',
    features:['Самый богатый пакет бесплатной церемонии','Закатный круиз на традиционной dhoni — включён','Спа для двоих включено в подарок','Личный батлер с первого до последнего дня','Прозрачный пол над рифом в ряде вилл'],
    pros:['Максимальный пакет бесплатных привилегий','Круиз на закате — романтичный аккорд дня','Прекрасная видимость для снорклинга прямо с виллы','Зрелый, отточенный сервис Taj','Лучшее для пар, которые хотят максимум из акции']
  },
  'sun-island': {
    badge:'paid', badgeText:'Платная церемония',
    name:'Sun Island Resort & Spa',
    location:'Атолл Ари', stars:5,
    img:'img/aerial.png',
    tagline:'Большой остров · Беседка для гостей · Весёлая компания',
    period:null,
    includes:null,
    price:'Вилла от $500/сут.', priceNote:'· Церемония $500–1000',
    rooms:'Один из крупнейших островных курортов Мальдив: 350+ вилл, пляжные бунгало и разные категории water villa.',
    food:'7 ресторанов и баров разных кухонь мира. Полупансион и полный пансион доступны.',
    territory:'Большой лесистый остров 1.5 км², просторные пляжи, бассейны, теннис, дайв-центр. Идеален для компании.',
    airport:'~35 мин. на гидроплане от MLE',
    features:['Беседка на берегу вмещает большую группу гостей','Один из немногих отелей, где реально собрать 20+ друзей','Богатая инфраструктура: дайвинг, снорклинг, водные виды спорта','Разные ценовые категории вилл'],
    pros:['Лучший выбор для свадьбы с гостями','Большой остров — много пространства','Хорошее соотношение цены для масштаба','Насыщенная развлекательная программа']
  },
  'meeru': {
    badge:'paid', badgeText:'Платная церемония',
    name:'Meeru Maldives Resort Island',
    location:'Северный Мале', stars:5,
    img:'img/villa.png',
    tagline:'Традиционная мальдивская церемония · Риф у порога',
    period:null, includes:null,
    price:'Вилла от $600/сут.', priceNote:'· Церемония $500–1000',
    rooms:'Уютный атмосферный курорт с аутентичной мальдивской архитектурой. Бунгало прямо у воды, просторные терраски.',
    food:'Несколько ресторанов и баров, свежие морепродукты с лодки. Ужин на пирсе — по запросу.',
    territory:'Один из крупнейших необитаемых лесных островов с богатой природой. Коралловый риф прямо у берега.',
    airport:'~40 мин. на спидботе',
    features:['Традиционная мальдивская церемония с местными обрядами','Снорклинг у рифа прямо у пирса','Спа с тропическими ритуалами','Атмосфера «настоящих» Мальдив без пафоса','Дайв-центр PADI'],
    pros:['Уникальный аутентичный опыт','Коралловый риф — для любителей подводного мира','Более тихая и камерная атмосфера','Доступнее по цене, чем ультра-люкс соседи']
  },
  'veligandu': {
    badge:'paid', badgeText:'Платная церемония',
    name:'Veligandu Island Resort & Spa',
    location:'Атолл Ари', stars:5,
    img:'img/wedding.png',
    tagline:'Только 18+ · Джакузи в вилле · Ужин на песке',
    period:null, includes:null,
    price:'Вилла от $700/сут.', priceNote:'· Церемония $800–1500',
    rooms:'Исключительно для взрослых. Все виллы с джакузи: overwater villa прямо над лагуной, бесконечный вид на горизонт.',
    food:'Основной ресторан над водой, романтические ужины на белом песке с персональным меню.',
    territory:'Узкий длинный остров, оба берега — отличные пляжи с разным характером. Спокойная интимная атмосфера.',
    airport:'~35 мин. на гидроплане',
    features:['Курорт строго 18+ — только пары и взрослые','Джакузи в каждой вилле включено','Приватный ужин на песке с декором — по запросу','Один из лучших рифов для снорклинга в атолле Ари','Спа-ритуалы только для пар'],
    pros:['Максимальная интимность — никаких детей','Джакузи прямо над океаном — это wow','Превосходный риф для дайвинга','Атмосфера полного уединения','Отличный выбор для медового месяца']
  },
  'lily-beach': {
    badge:'paid', badgeText:'Платная церемония',
    name:'Lily Beach Resort & Spa',
    location:'Атолл Ари', stars:5,
    img:'img/hero.png',
    tagline:'All-Inclusive · Флора · Сафари на закате',
    period:null, includes:null,
    price:'Вилла от $800/сут.', priceNote:'· Церемония $1000–2000',
    rooms:'Концепция Platinum All-Inclusive — всё включено без доплат. Роскошные water villa с собственным тропическим садом на деке.',
    food:'4 ресторана + 3 бара — всё в пакете. Вечерние гала-ужины, тематические вечера с живой музыкой.',
    territory:'Пышная тропическая растительность, ботанический сад, инфинити-бассейн. Зона снорклинга прямо у берега.',
    airport:'~40 мин. гидроплан',
    features:['Настоящий All-Inclusive: алкоголь, спа, экскурсии включены','Арка из живых цветов на церемонии','Сафари-круиз на закате с шампанским','Парная сауна для молодожёнов','Живая музыка каждый вечер'],
    pros:['Нет сюрпризов со счётом — всё в стоимости','Богатые флоральные декорации для церемонии','Лучший выбор для тех, кто не хочет считать расходы','Высокий уровень развлечений']
  },
  'lux': {
    badge:'paid', badgeText:'Платная церемония',
    name:'LUX South Ari Atoll',
    location:'Атолл Ари', stars:5,
    img:'img/aerial.png',
    tagline:'Стиль · Подводный ужин · Рассветный коктейль',
    period:null, includes:null,
    price:'Вилла от $900/сут.', priceNote:'· Церемония $1200–2500',
    rooms:'Дизайнерские виллы с собственным инфинити-бассейном, гамаком над водой, открытой душевой под небом.',
    food:'Подводный ресторан с видом на рыб — изюминка курорта. Плюс 6 ресторанов с авторской кухней от звёздных шефов.',
    territory:'Один из крупнейших курортов с хорошо продуманным пространством. Несколько бассейнов, спа-деревня, йога-павильон над водой.',
    airport:'~40 мин. гидроплан',
    features:['Подводный ресторан — уникальный опыт ужина среди океана','Коктейль при восходе на крыше над водой','Продуманная эстетика в стиле boho-luxe','Спа-меню для пар от 4 часов','Кинотеатр под звёздами'],
    pros:['Лучший дизайн и эстетика в категории','Подводный ужин — незабываемое впечатление','Разнообразие гастрономии для гурманов','Большой выбор activity','Шикарное место для свадебных фото']
  },
  'niyama': {
    badge:'paid', badgeText:'Платная церемония',
    name:'Niyama Private Islands',
    location:'Атолл Дхаалу', stars:5,
    img:'img/h2_taj_exotica.png',
    tagline:'Два острова · Subsix Club · Световое шоу',
    period:null, includes:null,
    price:'Вилла от $1200/сут.', priceNote:'· Церемония $1500–3000',
    rooms:'Два острова: Play (для активных) и Chill (для отдыха). Виллы с личным бассейном, тропической ванной и солнечной деком.',
    food:'7 ресторанов, включая легендарный Subsix — единственный подводный ночной клуб в мире.',
    territory:'Два частных острова с яркими рифами, развитая инфраструктура. Каждый гость в уединении.',
    airport:'~45 мин. гидроплан',
    features:['Subsix — подводный клуб 6 метров под водой: музыка и световое шоу','Два острова на выбор под настроение','Церемония с диджеем и laser show возможна','Дайвинг в одном из лучших мест атолла Дхаалу','Частные пикники на необитаемых островах'],
    pros:['Самая оригинальная атмосфера из подборки','Подводный клуб — уникально в мире','Два острова — два характера отдыха','Идеально для пар, которые хотят «и интим, и вечеринку»','Потрясающие рифы']
  },
  'conrad': {
    badge:'paid', badgeText:'Платная церемония',
    name:'Conrad Maldives Rangali Island',
    location:'Атолл Ари', stars:5,
    img:'img/wedding.png',
    tagline:'Ithaa — церемония под водой · Яхта · Дворецкий',
    period:null, includes:null,
    price:'Вилла от $1500/сут.', priceNote:'· Церемония $2000–4000',
    rooms:'Два отдельных острова, соединённых подводным тоннелем. Villas over water и уникальный Muraka — вилла с подводной спальней.',
    food:'Ithaa — самый известный ресторан Мальдив: 5 метров под водой, 270° панорама океана. Плюс 9 ресторанов и баров на обоих островах.',
    territory:'Два острова: семейный и для пар. Бесконечный главный бассейн, спа-деревня, вертолётная площадка.',
    airport:'~30 мин. гидроплан',
    features:['Церемония в ресторане Ithaa под толщей океана — мечта','Прогулки на яхте при закате включены в пакет','Персональный дворецкий 24/7','Опция: Royal Escape с ночёвкой в подводной вилле Muraka','Вертолётные экскурсии из отеля'],
    pros:['Самое знаковое место для свадьбы в мире','Подводный ресторан — гастро-легенда','Максимальный уровень персонального сервиса','Идеален для тех, кто хочет «лучшее из лучших»','Мощная wow-история для фото и видео']
  },
  'four-seasons': {
    badge:'paid', badgeText:'Платная церемония',
    name:'Four Seasons Landaa Giraavaru',
    location:'Атолл Баа', stars:5,
    img:'img/hero.png',
    tagline:'Infinity-бассейн · Заповедник ЮНЕСКО · Спа для двоих',
    period:null, includes:null,
    price:'Вилла от $1800/сут.', priceNote:'· Церемония $2500–5000',
    rooms:'Одни из лучших вилл в мире: огромные, с отдельной гостиной, ванной-бассейном, кабинкой для пикника на рифе.',
    food:'7 ресторанов с системой «вкус сезона»: свежайшие морепродукты, японская, средиземноморская, местная кухня. Личный шеф-повар — на заказ.',
    territory:'Атолл Баа — биосферный заповедник ЮНЕСКО с манта-рэями. Самый нетронутый риф подборки. Яхта, жилой коралловый сад, морская биостанция.',
    airport:'~1 час гидроплан',
    features:['Церемония у бесконечного бассейна с видом на риф','Ритуал с розовым шампанским для молодожёнов','Плавание с манта-рэями у острова','Морская биостанция для знакомства с рифом','Yoga pavilion над океаном'],
    pros:['Абсолютный высший класс по всем параметрам','Биосферный заповедник — природа нетронута','Манта-рэи — уникальный опыт','Лучший сервис Four Seasons','Виллы мирового уровня — живёшь как в сказке']
  }
};

// ── MODAL LOGIC ──────────────────────────────────────────────
const WA_LINK = 'https://wa.me/';
const TG_LINK = 'https://t.me/';

function buildModal(key) {
  const h = HOTELS[key];
  const includesHtml = h.includes
    ? `<div class="modal-section-title">Что входит бесплатно</div>
       <div class="modal-tags">${h.includes.map(i=>`<span>${i}</span>`).join('')}</div>`
    : '';
  const periodHtml = h.period
    ? `<div class="modal-fact"><div class="modal-fact-label">Период акции</div><div class="modal-fact-val">${h.period}</div></div>`
    : '';
  const msg = encodeURIComponent(`Здравствуйте! Хочу узнать подробнее об отеле ${h.name} (Мальдивы). Можете помочь с подбором и бронированием?`);

  return `
  <div class="modal-overlay" id="modal-${key}" role="dialog" aria-modal="true">
    <div class="modal">
      <button class="modal-close" onclick="closeModal('${key}')" aria-label="Закрыть">✕</button>
      <img src="${h.img}" alt="${h.name}" class="modal-img">
      <div class="modal-body">
        <span class="modal-badge ${h.badge}">${h.badgeText}</span>
        <div class="modal-title">${h.name}</div>
        <div class="modal-location">📍 ${h.location} · ${'★'.repeat(h.stars)}</div>
        <div class="modal-grid">
          <div class="modal-fact">
            <div class="modal-fact-label">Номера и виллы</div>
            <div class="modal-fact-val">${h.rooms}</div>
          </div>
          <div class="modal-fact">
            <div class="modal-fact-label">Питание</div>
            <div class="modal-fact-val">${h.food}</div>
          </div>
          <div class="modal-fact">
            <div class="modal-fact-label">Территория</div>
            <div class="modal-fact-val">${h.territory}</div>
          </div>
          <div class="modal-fact">
            <div class="modal-fact-label">Расстояние до аэропорта</div>
            <div class="modal-fact-val">${h.airport}</div>
          </div>
          ${periodHtml}
        </div>
        ${includesHtml}
        <div class="modal-section-title">Фишки отеля</div>
        <div class="modal-tags">${h.features.map(f=>`<span>${f}</span>`).join('')}</div>
        <div class="modal-section-title">Почему стоит выбрать</div>
        <ul class="modal-pros">${h.pros.map(p=>`<li>${p}</li>`).join('')}</ul>
        <div class="modal-price-block">
          <div class="modal-price-txt">
            <div class="label">Стоимость</div>
            <div class="val">${h.price}</div>
          </div>
          <div style="font-size:.8rem;color:var(--text-muted)">${h.priceNote}</div>
        </div>
        <div class="modal-actions">
          <a href="${WA_LINK}?text=${msg}" target="_blank" class="btn-modal-wa">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.136.561 4.14 1.533 5.874L0 24l6.291-1.65A11.937 11.937 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.817 9.817 0 01-5.003-1.372l-.36-.213-3.733.978.995-3.638-.234-.374A9.815 9.815 0 012.182 12C2.182 6.578 6.578 2.182 12 2.182c5.421 0 9.818 4.396 9.818 9.818 0 5.421-4.397 9.818-9.818 9.818z"/></svg>
            Узнать в WhatsApp
          </a>
          <a href="${TG_LINK}?text=${msg}" target="_blank" class="btn-modal-tg">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/></svg>
            Узнать в Telegram
          </a>
        </div>
      </div>
    </div>
  </div>`;
}

function openModal(key) {
  const overlay = document.getElementById('modal-' + key);
  if (overlay) {
    overlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}
function closeModal(key) {
  const overlay = document.getElementById('modal-' + key);
  if (overlay) {
    overlay.classList.remove('open');
    document.body.style.overflow = '';
  }
}

// Build & inject all modals
document.addEventListener('DOMContentLoaded', () => {
  const fragment = document.createDocumentFragment();
  Object.keys(HOTELS).forEach(key => {
    const div = document.createElement('div');
    div.innerHTML = buildModal(key);
    fragment.appendChild(div.firstElementChild);
  });
  document.body.appendChild(fragment);

  // Close on overlay click
  document.querySelectorAll('.modal-overlay').forEach(overlay => {
    overlay.addEventListener('click', e => {
      if (e.target === overlay) {
        const key = overlay.id.replace('modal-', '');
        closeModal(key);
      }
    });
  });

  // Close on Escape
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay.open').forEach(o => {
        closeModal(o.id.replace('modal-', ''));
      });
    }
  });

  // Scroll animations
  document.querySelectorAll('.hotel-card, .info-card, .intro-icon-item').forEach((el, i) => {
    el.classList.add('fade-in');
    el.style.transitionDelay = (i % 4) * 80 + 'ms';
  });

  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => io.observe(el));

  // Divider quote
  const quote = document.querySelector('.divider-quote');
  if (quote) {
    new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { quote.classList.add('visible'); }
    }, { threshold: 0.4 }).observe(quote);
  }

  // Hero scroll btn
  document.querySelector('.btn-hero')?.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector('#hotels')?.scrollIntoView({ behavior: 'smooth' });
  });

  // Hero parallax
  const heroImg = document.querySelector('.hero-img');
  if (heroImg) {
    window.addEventListener('scroll', () => {
      heroImg.style.transform = `translateY(${window.scrollY * 0.22}px)`;
    }, { passive: true });
  }
});
