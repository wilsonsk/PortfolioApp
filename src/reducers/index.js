import { combineReducers } from 'redux';
import LibraryReducer from './LibraryReducer';
import SelectLibraryReducer from './SelectLibraryReducer';

export default combineReducers({
	libraries: LibraryReducer,
	selectedLibraryId: SelectLibraryReducer
});
