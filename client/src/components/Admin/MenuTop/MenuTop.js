import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';
import { MenuFoldOutlined, MenuUnfoldOutlined, PoweroffOutlined } from '@ant-design/icons';
import CesarLogo from '../../../../src/assets/img/png/logo.png';
import { logout } from '../../../api/auth';

import './MenuTop.scss';

export default function MenuTop(props) {
    const { menuCollapsed, setMenuCollapsed } = props;

    const logoutUser = () => {
        logout();
        window.location.reload();
    }

    return(
        <div className="menu-top">
            <div className="menu-top__left">
                <Link to={"/admin"}>
                    <img 
                        className="menu-top__left-logo"
                        src={CesarLogo} 
                        alt="Cesar Val Leiva"
                    />
                </Link>
                <Button type="link" onClick={() => setMenuCollapsed(!menuCollapsed)}>
                    {menuCollapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined /> }
                </Button>
            </div>
            <div className="menu-top__right">
                <Button type="link" onClick={logoutUser}>
                    <PoweroffOutlined />
                </Button>
            </div>
        </div>
    )
}