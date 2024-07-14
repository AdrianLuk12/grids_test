import React, { useEffect, useRef } from 'react';
import { GridStack } from 'gridstack';
import 'gridstack/dist/gridstack.min.css';
import 'gridstack/dist/gridstack-extra.css';
import './GridStackComponent.css'

const GridStackComponent: React.FC = () => {
    const gridRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (gridRef.current) {
            const grid = GridStack.init({
                disableResize: true,
                acceptWidgets: true,
                float: true,
                animate: true,
                margin: 0,
                column: 6,
                row: 10,
                alwaysShowResizeHandle: false,
            });
            grid.removeAll();

            // Add some initial items 60 circles
            const serializedData = [
                {x: 0, y: 0, w: 6, h: 1, content: `<div class="circle">6x1</div>`},

                {x: 0, y: 1, w: 1, h: 1, content: `<div class="circle">1x1</div>`},
                {x: 1, y: 1, w: 1, h: 1, content: `<div class="circle">1x1</div>`},
                {x: 2, y: 1, w: 1, h: 1, content: `<div class="circle">1x1</div>`},
                {x: 3, y: 1, w: 1, h: 1, content: `<div class="circle">1x1</div>`},
                {x: 4, y: 1, w: 1, h: 1, content: `<div class="circle">1x1</div>`},
                {x: 5, y: 1, w: 1, h: 1, content: `<div class="circle">1x1</div>`},

                {x: 0, y: 2, w: 2, h: 2, content: `<div class="circle">2x2</div>`},
                {x: 2, y: 2, w: 2, h: 2, content: `<div class="circle">2x2</div>`},
                {x: 4, y: 2, w: 2, h: 2, content: `<div class="circle">2x2</div>`},

                {x: 0, y: 4, w: 2, h: 4, content: `<div class="circle">2x4</div>`},
                {x: 2, y: 4, w: 2, h: 4, content: `<div class="circle">2x4</div>`},
                {x: 4, y: 4, w: 2, h: 4, content: `<div class="circle">2x4</div>`},

                {x: 0, y: 8, w: 3, h: 2, content: `<div class="circle">3x2</div>`},                
                {x: 3, y: 8, w: 3, h: 2, content: `<div class="circle">3x2</div>`},
            ];
            
            grid.load(serializedData);
            /*
            for (let i = 0; i < 60; i++) {
                const col = (i % 6) * 2;
                const row = Math.floor(i / 6) * 2;
                const content = `<div class="circle">${i + 1}</div>`;
                grid.addWidget({ x: col, y: row, w: 1, h: 1, content: content });
            }
            */
            
                
        }
    }, []);

    return (
        <div className="grid-stack" ref={gridRef}></div>
    );
};

export default GridStackComponent;