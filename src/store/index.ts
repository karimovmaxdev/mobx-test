import textControlViewModel from './textControl/viewModel';
import searchControlViewModel from './searchControl/viewModel';

export const STORE = {
    TEXT_CONTROL_STORE_1: new textControlViewModel(),
    TEXT_CONTROL_STORE_2: new textControlViewModel(),
    SEARCH_CONTROL_STORE_1: new searchControlViewModel(),
    SEARCH_CONTROL_STORE_2: new searchControlViewModel(),
}