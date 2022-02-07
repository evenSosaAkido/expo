declare type Options = {
    output?: string;
    validityDurationYears?: number;
    commonName?: string;
};
export declare function generateCodeSigningAsync(projectRoot: string, { output, validityDurationYears: validityDurationYearsNumber, commonName }: Options): Promise<void>;
export {};
