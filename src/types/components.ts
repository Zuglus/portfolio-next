// src/types/components.ts

import { Project, Slide } from './project';

/**
 * Пропсы для компонента изображения
 */
export interface ImageProps {
  /** URL изображения */
  src: string;
  /** Альтернативный текст */
  alt: string;
  /** Дополнительные CSS классы */
  className?: string;
  /** Приоритет загрузки */
  priority?: boolean;
}

/**
 * Пропсы для компонента скелетона
 */
export interface SkeletonProps {
  /** Дополнительные CSS классы */
  className?: string;
  /** Вариант отображения */
  variant?: 'default' | 'circle' | 'text';
  /** Тип анимации */
  animation?: 'pulse' | 'wave' | 'none';
}

/**
 * Пропсы для модального окна проекта
 */
export interface ProjectModalProps {
  /** Данные проекта */
  project: Project;
  /** Обработчик закрытия */
  onClose: () => void;
}

/**
 * Пропсы для заголовка модального окна
 */
export interface ModalHeaderProps {
  /** Данные проекта */
  project: Project;
}

/**
 * Пропсы для слайдера
 */
export interface ModalSliderProps {
  /** Массив слайдов */
  slides: Slide[];
}

/**
 * Пропсы для кнопок навигации
 */
export interface NavigationButtonsProps {
  /** Обработчик навигации */
  onNavigate: (direction: 'next' | 'prev') => void;
  /** Флаг блокировки */
  disabled?: boolean;
}

/**
 * Пропсы для слайдера изображений
 */
export interface SliderImageProps extends ImageProps {
  /** Индекс текущего слайда */
  index: number;
}

/**
 * Пропсы для секции портфолио
 */
export interface PortfolioSectionProps {
  /** Обработчик клика по карточке */
  onCardClick: (id: string) => void;
}

/**
 * Пропсы для секции резюме
 */
export interface ExperienceItemProps {
  /** Данные об опыте работы */
  experience: {
    /** Год или период работы */
    year: string;
    /** Название компании */
    company: string;
    /** Должность */
    position: string;
    /** Обязанности */
    duties: string[];
    /** URL изображения для декоративного круга (опционально) */
    circleImage?: string;
  };
}