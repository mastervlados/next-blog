import React from "react";
import Link from "next/link";

const ButtonTile = ({ icon: Icon, href }) => {
    return (
        <Link href={href} target={'_blank'} className="button-tile">
            {Icon && <Icon/>}
        </Link>
    )
}

export default ButtonTile