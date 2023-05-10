//libraries
import styled from 'styled-components';

interface UserCardProps {
    firstName: string;
    lastName: string;
    id: number;
}

const ProfileCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; // vertical if flex-direction is column
    align-items: center; // horizontal if flex-direction is column
    min-height: 5rem;
    width: 16rem;
    border-radius: 15px;
    box-shadow: 0px 0px 7px 0px rgba(192, 217, 255, 0.75);

    //Mini animation
    transition: box-shadow 0.15s ease-in-out, transform 0.3s ease-in-out;

    h2 {
        font-size: 1.5rem;
        text-align: center;
    }

    &:hover {
        box-shadow: 0px 0px 13px 0px rgba(150, 192, 255, 0.75);
        transform: scale(1.05);
    };
`;


function HomeUserCard(props: UserCardProps) {
    return (
        <ProfileCardContainer key={props.id}>
            <h2>{props.firstName} {props.lastName}</h2>
        </ProfileCardContainer>
    );
};

export default HomeUserCard;