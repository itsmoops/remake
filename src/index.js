import { injectGlobal } from "styled-components";
import defaultStyles from "./helpers/default-styles";

injectGlobal`
    body {
        ${defaultStyles}
    }
`;

export * from "./tags";
