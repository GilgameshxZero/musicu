// Disable console logs on production.
console.log = () => {};

// Use production backend host.
import {
	setApiHost
} from "api/fetchApi";
setApiHost("https://api.mus.icu");

import "components/App.tsx";
