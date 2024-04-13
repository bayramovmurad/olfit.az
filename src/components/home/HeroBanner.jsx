import { Link } from 'react-router-dom'
import styles from './home.module.css'

const HeroBanner = () => {
    return (

        <div className={styles.banner}>
            <div className={styles.bg_shadow}>
                <div className='flex flex-col  items-left text-left justify-center h-[90vh] p-5 gap-y-4'>
                    <h2 className='text-white text-4xl font-bold'>FIT BEYIN FIT BEDENDE FORMALAŞIR</h2>
                    <p className='text-white text-2xl w-[480px]'>olfit senin fit bedene sahib olmağın üçün sene tam destek olmağa hazırdır. <span className='text-green-500'>Bes sen hazırsan?</span></p>
                    <Link to="/about">
                        <button className='bg-red w-40 h-10 bg-green-500 border border-white outline-none text-white hover:bg-red-500 duration-300 hover:animate-pulse'>
                            Biz Kimik?
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
export default HeroBanner