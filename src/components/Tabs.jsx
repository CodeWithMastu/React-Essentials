export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  //const ButtonsContainer = buttonsContainer; //necessary because it won't work without it
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
