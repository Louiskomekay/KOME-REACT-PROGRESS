import React from 'react'
import { nanoid } from 'nanoid'
import SingleColor from './SingleColor'

const ColorList = ({ colors }) => {
    return (
        <section>{colors.map((color, index) => {
            return <SingleColor key={nanoid()} index={index} color={color} />
        })}</section>
    )
}

export default ColorList