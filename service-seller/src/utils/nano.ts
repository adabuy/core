import { customAlphabet } from "nanoid";

const customPid = customAlphabet("0123456789ABCDEFGHJKLMNOPQRTUVWXY", 12);

const largePid = customAlphabet("0123456789ABCDEFGHJKLMNOPQRTUVWXYZ", 20);

export { customPid, largePid };