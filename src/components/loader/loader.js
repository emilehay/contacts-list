import React from 'react'

const Loader = () => {

    return (
        <div className='loader mt-5 mb-5 text-center'>
            <img src={require('../../assets/grid.svg')} alt='Loading...' title='Loading...' />
        </div>
    )
        
}

export default Loader
