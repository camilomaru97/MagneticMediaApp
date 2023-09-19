import { Navigate, Route, Routes } from 'react-router-dom'
import { LoginPage } from '../components/pages/auth/LoginPage'
import { RegisterPage } from '../components/pages/auth/RegisterPage'
import { IronLlegada } from '../components/pages/ironLlegada/IronLlegada'
import { IronSalida } from '../components/pages/ironSalida/IronSalida'
import { NoticiasPage } from '../components/pages/noticias/NoticiasPage'
import { CatalogoPage } from '../components/pages/catalogo/CatalogoPage'

export const RouterApp = () => {

    return (
        <Routes>
            <Route path='/auth/*' element={<LoginPage />} />
            <Route path='/auth/register' element={<RegisterPage />} />
            <Route path='/*' element={<Navigate to='/auth' />} />

            <Route path='/catalogo' element={<CatalogoPage />} />
            <Route path='/noticias' element={<NoticiasPage />} />
            <Route path='/ironllegada' element={<IronLlegada />} />
            <Route path='/ironsalida' element={<IronSalida />} />

            <Route path='/usuarios' element={<IronSalida />} /> 
            <Route path='/historial' element={<IronSalida />} /> 
            <Route path='/analitica' element={<IronSalida />} /> 
            <Route path='/ventas' element={<IronSalida />} /> 
            <Route path='/reportes' element={<IronSalida />} /> 
        </Routes>
    )
}