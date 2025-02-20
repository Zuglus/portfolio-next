// src/types/project.ts

/**
 * Описывает отдельный слайд в проекте
 */
export interface Slide {
    /** URL изображения слайда */
    image: string;
    /** Описание задачи для слайда (опционально) */
    task?: string;
    /** Описание решения для слайда (опционально) */
    solution?: string;
  }
  
  /**
   * Описывает проект в портфолио
   */
  export interface Project {
    /** Уникальный идентификатор проекта */
    id: string;
    /** Название проекта */
    title: string;
    /** Описание проекта */
    description: string;
    /** Целевая аудитория проекта (опционально) */
    audience?: string;
    /** Массив слайдов проекта */
    slides: Slide[];
  }
  
  /**
   * Типы для карточки проекта в портфолио
   */
  export interface PortfolioCardProps {
    /** Данные проекта для карточки */
    project: {
      id: string;
      image: string;
      alt: string;
    };
    /** Обработчик клика по карточке */
    onClick: (id: string) => void;
  }
  
  /**
   * Состояние модального окна
   */
  export interface ModalState {
    /** Флаг открытия модального окна */
    isOpen: boolean;
    /** Текущий отображаемый проект */
    currentProject: Project | null;
    /** Индекс текущего слайда */
    currentSlideIndex: number;
  }
  
  /**
   * Действия с модальным окном
   */
  export interface ModalActions {
    /** Открыть модальное окно с проектом */
    openModal: (id: string, project: Project) => void;
    /** Закрыть модальное окно */
    closeModal: () => void;
    /** Установить конкретный слайд */
    setSlide: (index: number) => void;
    /** Перейти к следующему слайду */
    nextSlide: () => void;
    /** Перейти к предыдущему слайду */
    prevSlide: () => void;
  }
  
  /**
   * Состояние навигации по слайдам
   */
  export interface NavigationState {
    /** Индекс текущего слайда */
    currentSlideIndex: number;
    /** Общее количество слайдов */
    totalSlides: number;
    /** Направление навигации ('left' | 'right' | 'none') */
    direction: 'left' | 'right' | 'none';
  }
  
  /**
   * Действия навигации
   */
  export interface NavigationActions {
    /** Установить общее количество слайдов */
    setTotalSlides: (total: number) => void;
    /** Перейти к следующему слайду */
    nextSlide: () => void;
    /** Перейти к предыдущему слайду */
    prevSlide: () => void;
    /** Сбросить состояние навигации */
    reset: () => void;
  }
  
  /**
   * Состояние загрузки изображения
   */
  export type ImageLoadStatus = 'init' | 'loading' | 'loaded' | 'error' | 'retrying';
  
  /**
   * Параметры для предзагрузки изображений
   */
  export interface PreloadOptions {
    /** Количество одновременных загрузок */
    concurrency?: number;
    /** Приоритет загрузки */
    priority?: boolean;
  }
  
  /**
   * Утилитарные типы
   */
  export type RequireAtLeastOne<T> = {
    [K in keyof T]-?: Required<Pick<T, K>> & Partial<Pick<T, Exclude<keyof T, K>>>;
  }[keyof T];