import React from "react";
import Link from "next/link";
import styles from './ButtonTile.module.css'

const ButtonTile = ({ icon: Icon, href }) => {
    return (
        <Link href={href} target={'_blank'} className={[styles.buttonTile]}>
            {Icon && <Icon/>}
        </Link>
    )
}

export default ButtonTile