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

const Methods = {
    init() {
        const commonScrollSuave = new CommonScrollSuave('.js--menu a[href^="#"]');
        commonScrollSuave.init();

        const commonAccordion = new CommonAccordion('.js--accordion dt');
        commonAccordion.init();

        const commomTabImages = new CommonTabImages('.js--tabmenu li', '.js--tabcontent section');
        commomTabImages.init();

        CommonModal.init();
        CommonTooltip.init();
        CommonDropdownMenu.init();
        CommonWorkingHours.init();
        CommonFetchNumbers.init();
        CommonFetchBitcoinValues.init();
        CommonScrollAnimacao.init();
        MobileMenu.init();
    },
};

document.addEventListener('DOMContentLoaded', Methods.init);
