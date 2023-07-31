import { atom } from 'recoil';
import { CategoryType } from '../types/categoryTypes';

export const categoryListState = atom<CategoryType[]>({
	key: 'categoryListState',
	default: [],
});

export const selectedCategoryState = atom<string>({
	key: 'selectedCategoryState',
	default: '',
});
