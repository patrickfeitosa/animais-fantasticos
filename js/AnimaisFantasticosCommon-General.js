import CommonScrollSuave from './modules/AnimaisFantasticosCommon-ScrollSuave.js';
import CommonAccordion from './modules/AnimaisFantasticosCommon-Accordion.js';
import CommonTabImages from './modules/AnimaisFantasticosCommon-TabImages.js';
import CommonModal from './modules/AnimaisFantasticosCommon-Modal.js';
import CommonTooltip from './modules/AnimaisFantasticosCommon-Tooltip.js';
import CommonDropdownMenu from './modules/AnimaisFantasticosCommon-DropdownMenu.js';
import CommonWorkingHours from './modules/AnimaisFantasticosCommon-WorkingHours.js';
import CommonFetchNumbers from './modules/AnimaisFantasticosCommon-FetchNumbers.js';
import CommonFetchBitcoinValues from './modules/AnimaisFantasticosCommon-FetchBitcoinValues.js';
import MobileMenu from './modules/AnimaisFantasticosMobile-Menu.js';
import CommonScrollAnimacao from './modules/AnimaisFantasticosCommon-ScrollAnimacao.js';

import SliderNav from './vendor/Slider.js';

const Methods = {
    init() {
        const commonScrollSuave = new CommonScrollSuave('.js--menu a[href^="#"]');
        commonScrollSuave.init();

        const commonAccordion = new CommonAccordion('.js--accordion dt');
        commonAccordion.init();

        const commomTabImages = new CommonTabImages('.js--tabmenu li', '.js--tabcontent section');
        commomTabImages.init();

        const commonModal = new CommonModal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="container"]');
        commonModal.init();

        const commonTooltip = new CommonTooltip('[data-tooltip]');
        commonTooltip.init();

        const commonScrollAnimacao = new CommonScrollAnimacao('.js--scroll');
        commonScrollAnimacao.init();

        const commonDropdownMenu = new CommonDropdownMenu('[data-dropdown]', 'active', ['click', 'touchstart']);
        commonDropdownMenu.init();

        const commonWorkingHours = new CommonWorkingHours('[data-semana]');
        commonWorkingHours.init();

        CommonFetchNumbers.init();
        CommonFetchBitcoinValues.init();

        const mobileMenu = new MobileMenu('[data-menu="button"]', '[data-menu="lista"]');
        mobileMenu.init();

        Methods.initSlider();
    },

    initSlider() {
        const options = {
            slide: '.js--slider',
            wrapper: '.js--main-wrapper',
            hasThumbs: {
                options: true,
                selector: '.js--thumbs',
            },
            infinite: true,
        };

        const sliderWithNav = new SliderNav(options);
        sliderWithNav.init();
    },
};

document.addEventListener('DOMContentLoaded', Methods.init);
