import { injectGlobal } from "styled-components";
import globalStyles from "./helpers/global-styles";

injectGlobal`
    body {
        ${globalStyles}
    }
`;

export * from "./tags";
