// src/types/index.ts

export * from './project';
export * from './components';

// Общие утилитарные типы
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P];
};

export type ValueOf<T> = T[keyof T];

export type NonEmptyArray<T> = [T, ...T[]];

// Типы для стилей
export interface StylesConfig {
  CARD_STYLES: {
    CONTAINER: string;
    IMAGE: string;
  };
  SECTION_STYLES: {
    CONTAINER: string;
    HEADER_WRAPPER: string;
    DECORATION: string;
    DECORATION_IMAGE: string;
    TITLE: string;
    GRID: string;
  };
  IMAGE_STYLES: {
    CONTAINER: string;
    SKELETON: string;
    ERROR: string;
    IMAGE: string;
  };
}