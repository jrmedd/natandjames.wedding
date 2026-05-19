import styled, { css } from "styled-components";

const StyledLabel = styled.label(
  (props) => css`
    display: block;
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.text.body};
    font-size: 1.5rem;
  `,
);

const StyledInput = styled.input(
  (props) => css`
    display: block;
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 1.25rem;
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.text.body};
    background: none;
    border: none;
    border-radius: 0.25rem;
    box-shadow: 0 0 0 1px ${(props) => props.theme.text.body};
    outline: none;
    transition: box-shadow 0.2s ease;
    &:active,
    &:focus {
      box-shadow: 0 0 0 2px ${(props) => props.theme.text.body};
    }
  `,
);

const StyledFieldset = styled.fieldset(
  (props) => css`
    border: none;
    padding: 0;
    margin: 0;
  `,
);

const StyledLegend = styled.legend(
  (props) => css`
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.text.body};
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  `,
);

const StyledHint = styled.span(
  (props) => css`
    display: block;
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.text.body};
    font-size: 1rem;
    margin-top: 0.25rem;
    margin-bottom: 0.5rem;
  `,
);

const StyledSelector = styled.div(
  (props) => css`
    display: flex;
    flex-direction: row;
    gap: -1px;
  `,
);

const StyledRadioGroup = styled.div`
  display: flex;
  flex-direction: row;
`;

const StyledRadioLabel = styled.label(
  (props) => css`
    display: flex;
    align-items: center;
    font-family: ${(props) => props.theme.fonts.body};
    color: ${(props) => props.theme.text.body};
    font-size: 1.25rem;
    box-shadow: 0 0 0 1px ${(props) => props.theme.text.body};
    padding: .75rem 1.5rem;
    border-radius: 0.25rem;
    cursor: pointer;
    background-color: ${(props) => props.theme.background};
    background-image: linear-gradient(
      ${(props) => props.theme.interactive},
      ${(props) => props.theme.interactive}
    );
    background-repeat: no-repeat;
    background-position: left top;
    background-size: 0% 100%;
    transition:
      background-size 0.25s ease,
      color 0.2s ease,
      box-shadow 0.2s ease;
    &:hover, &:focus  {
      box-shadow: 0 0 0 2px ${(props) => props.theme.text.body};
    }
    input[type="radio"]:checked ~ & {
      background-size: 100% 100%;
      color: ${(props) => props.theme.background};
      box-shadow: 0 0 0 1px ${(props) => props.theme.interactive};
    }
    ${StyledRadioGroup}:first-child & {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      background-position: right top;
    }
    ${StyledRadioGroup}:last-child & {
      border-top-left-radius: 0; 
      border-bottom-left-radius: 0;
      background-position: left top;
    }
  `,
);

const StyledRadio = styled.input.attrs({ type: "radio" })`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;
  pointer-events: none;
`;

export const TwoAnswerQuestion = (props) => (
  <StyledFieldset>
    <StyledLegend>{props.label}
      {props.hint && <StyledHint>{props.hint}</StyledHint>}
    </StyledLegend>
    <StyledSelector>
      {props.options.map((option) => (
        <StyledRadioGroup key={option.value}>
          <StyledRadio
            id={`${props.name}-${option.value}`}
            name={props.name}
            value={option.value}
            onChange={props.onChange}
          />
          <StyledRadioLabel
            htmlFor={`${props.name}-${option.value}`}
            key={option.value}
          >
            {option.label}
          </StyledRadioLabel>
        </StyledRadioGroup>
      ))}
    </StyledSelector>
  </StyledFieldset>
);

export const FormInput = (props) => (
  <>
    <StyledLabel htmlFor={props.name}>{props.label}</StyledLabel>
    <StyledInput
      id={props.name}
      type={props.type}
      name={props.name}
      value={props.value}
      onChange={props.onChange}
      autoComplete={props.autoComplete}
      inputMode={props.inputMode}
    />
  </>
);
