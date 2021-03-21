import React from 'react';


// ***************************************** STYLES **************************** // 

import styles from './Formulario.module.css'

// ***************************************** HOOKS ***************************** // 

import useSelect from '../hooks/useSelect';

// **************************************************************************** //

const Formulario = () => {

    // USE CUSTOM HOOK
    const [ categoria, SelectNoticias ] = useSelect();

    return ( 
        <div className={`${styles.buscador} row`}>

            <div className="col s12 m8 offset-m2">

                <form>
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
                http://newsapi.org/v2/top-headlines?country=us&category=general&apiKey=API_KEY
                https://newsapi.org/
            </div>

        </div>
    );
}
 
export default Formulario;