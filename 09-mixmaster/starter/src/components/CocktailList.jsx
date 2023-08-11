import Wrapper from '../assets/wrappers/CocktailList'

const CocktailList = ({ drinks }) => {
    if (!drinks) {
        return <h4 style={{ textAlign: 'center' }}>No matching cocktails found...</h4>
    }

    const formattedDrinks = drinks.map((item) => {
        const { idDrink, strDrink, strDrinkThumb, strAlchoholic, strGlass } = item;

        return { id: idDrink, name: strDrink, image: strDrinkThumb, info: strAlchoholic, glass: strGlass };
    })

    return (
        <Wrapper>CocktailList</Wrapper>
    )
}

export default CocktailList