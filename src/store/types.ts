import store from './store';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export interface MovieShow {
    show: {
        name?: string;
        type?: string;
        language?: string;
        image?: {
            medium?: string;
            original?: string;
        };
        summary?: string;
        genres?: string[];
        status?: string;
        premiered?: string;
        rating?: {
            average?: number;
        };
        network?: {
            name?: string;
        };
    };
}