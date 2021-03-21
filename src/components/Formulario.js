import React from 'react';
import PropTypes from 'prop-types';

// ***************************************** STYLES **************************** // 

import styles from './Formulario.module.css'

// ***************************************** HOOKS ***************************** // 

import useSelect from '../hooks/useSelect';

// **************************************************************************** //

const Formulario = ({ guardarCategoria }) => {

    const OPCIONES = [

        { value: 'general', label: 'General' },
        { value: 'business', label: 'Negocios' },
        { value: 'entertainment', label: 'Entretenimiento' },
        { value: 'health', label: 'Salud' },
        { value: 'science', label: 'Ciencia' },
        { value: 'sports', label: 'Deportes' },
        { value: 'technology', label: 'Tecnología' },

    ]

    // USE CUSTOM HOOK
    const [ categoria, SelectNoticias ] = useSelect('general', OPCIONES);

    // FORM SUBMIT, SEND CATEGORY TO APP.JS
    const buscarNoticias = e => {
        e.preventDefault();

        guardarCategoria(categoria);
    }


    return ( 
        <div className={`${styles.buscador} row`}>

            <div className="col s12 m8 offset-m2">

                <form
                    onSubmit={ buscarNoticias }
                    >
                    <h2 className={styles.heading}>Encuentra noticias por categor&iacute;a</h2>

                    <SelectNoticias />

                    <div className="input-field col s12" >
                        <input
                            type="submit"
                            className={`${styles['btn-block']} btn-large amber darken-2`}
                            value="Buscar"
                        />
                    </div>
                </form>
            </div>

        </div>
    );
}

Formulario.propTypes = {
    guardarCategoria: PropTypes.func.isRequired
}
 
export default Formulario;