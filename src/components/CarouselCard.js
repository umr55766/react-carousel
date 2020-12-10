import styled from "styled-components";

function ProductCard(props) {
  const CardWrapper = styled.div`
    border: ${props => props.primary ? "2px solid black" : "1px solid #eee"};
    margin: 10px;
    padding: ${props => props.primary ? "30px" : "10px"};
    border-radius: 5px;
    display: flex;
    flex-direction: column;
  `;

  const ProductName = styled.label`
    font-size: ${props => props.primary ? "18px" : "14px"};
    font-weight: bold;
    text-align: left;
  `;

  const LeftAlignedLabel = styled.label`
    text-align: left;
  `;

  return (
    <CardWrapper primary={props.primary}>
      <LeftAlignedLabel>{props.product.category}</LeftAlignedLabel>
      <img src={props.product.image}/>
      <ProductName primary={props.primary}>
        {props.product.title.length > 15 ? props.product.title.substr(0, 15)+"..." : props.product.title}
      </ProductName>
      <LeftAlignedLabel>Rs. {props.product.price.toFixed(2)}</LeftAlignedLabel>
    </CardWrapper>
  );
}

export default ProductCard;
