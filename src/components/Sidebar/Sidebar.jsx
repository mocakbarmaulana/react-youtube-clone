import { Stack } from '@mui/material'
import React from 'react'

import { categories } from '../../utils/constant'

const selectedCategory = "New";

const Sidebar = () => (
    <Stack direction="row" sx={{ overflowY: "auto", height: { sx: "auto", md: "95%" }, flexDirection: { md: "column" } }}>
        {categories.map((category, index) => (
            <button className="category-btn" key={index} style={{ backgroundColor: category.name === selectedCategory && "#FC1503", color: "white" }}>
                <span>{category.icon}</span>
                <span>{category.name}</span>
            </button>
        ))}
    </Stack>
)

export default Sidebar