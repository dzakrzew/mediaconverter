import { Routes, Route } from 'react-router-dom';
import { HomePage, NotFoundPage } from '../pages';

export const AppRouter = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    )
};