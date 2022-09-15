import type { FC } from 'react';
import { useState } from 'react';
import { useTabsContext } from '../../../contexts/TabsContext';

import './Dropdown.css';

const Dropdown: FC = () => {
    const [isActive, setIsActive] = useState(false);
    const { options, currentOption, setCurrentOption } = useTabsContext();

    const handleSelection = (value: string) => {
        setCurrentOption(value);
        setIsActive(false);
    };

    return (
        <div className="dropdown">
            <div
                className="dropdown__button"
                onClick={() => setIsActive(!isActive)}
            >
                <span className="dropdown__button__label">{currentOption}</span>
                <span className="arrow__down"></span>
            </div>
            {isActive && (
                <div className="dropdown__content">
                    {options.map((option, index) => {
                        return (
                            <div
                                className="dropdown__item"
                                key={index}
                                onClick={() => handleSelection(option.value)}
                            >
                                <img alt={option.value} src={option.image} />
                                <span>{option.value}</span>
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

export { Dropdown };
