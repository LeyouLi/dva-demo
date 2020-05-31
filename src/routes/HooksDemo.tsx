import React, { FC, useState } from 'react';
import { Button } from 'antd';

const HooksDemo:FC = () => {
    const [ title, setTitle ] = useState('我是hooks页面');

    function handleChangeTitle() {
        setTitle('换title之后');
    }
    
    return (
        <>
            <div>{title}</div>
            <Button onClick={handleChangeTitle}>换title</Button>  
        </>
    )
}
export default HooksDemo;