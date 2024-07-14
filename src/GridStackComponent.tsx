import React, { useEffect, useRef } from 'react';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import './GridStackComponent.css'

const GridStackComponent: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (gridRef.current) {
            const grid = GridStack.init({
                acceptWidgets: true,
                animate: true,
                margin: 0,
            });
            grid.removeAll();

            // Add some initial items 60 circles
            
            for (let i = 0; i < 60; i++) {
                const col = (i % 6) * 2;
                const row = Math.floor(i / 6) * 2;
                const content = `<div class="circle">${i + 1}</div>`;
                grid.addWidget({ x: col, y: row, w: 2, h: 2, content: content });
            }
                
        }
    }, []);

    return (
        <div className="grid-stack" ref={gridRef}></div>
    );
};

export default GridStackComponent;