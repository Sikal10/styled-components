import {StyledCard, Image} from "./cardStyle";

const Card = ({item: {body, image, title, id}}) => {

    return (
        <StyledCard layout={id % 2 === 0 && "row-reverse"}>
            <div>
                <h1>{title}</h1>
                <p>{body}</p>
            </div>

            <Image src={image} />
        </StyledCard>
    );
};

export default Card;