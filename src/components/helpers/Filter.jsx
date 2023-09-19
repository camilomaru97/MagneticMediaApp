import '../../styles/components/helpers/filter.css'

export const Filter = () => {
    return (
        <form>
            <label className='date'> 
                Fecha de inicio:
            </label>
            <input type="date" />

            <label className='date'> 
                Fecha de fin:
            </label>
            <input 
                type="date" 
            />

            <label className='buscar'>
               Buscar: 
            </label> 
            <input 
                type="text" 
            />
        </form>
    )
}