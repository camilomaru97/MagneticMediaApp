import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../components/pages/auth/LoginPage'
import { RegisterPage } from '../components/pages/auth/RegisterPage'
import { CatalogoPage } from '../components/pages/catalogo/CatalogoPage'
import { IronLlegada } from '../components/pages/ironLlegada/IronLlegada'
import { IronSalida } from '../components/pages/ironSalida/IronSalida'

export const RouterApp = () => {

    return (
        <Routes>
            <Route path='/auth/*' element={<LoginPage />} />
            <Route path='/auth/register' element={<RegisterPage />} />
            <Route path='/*' element={<Navigate to='/auth' />} />

            <Route path='/catalogo' element={<CatalogoPage />} />
            <Route path='/ironllegada' element={<IronLlegada />} />
            <Route path='/ironsalida' element={<IronSalida />} />   
        </Routes>
    )
}