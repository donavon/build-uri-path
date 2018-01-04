declare module "build-uri-path" {
  function buildEncodedUri(
    strings: string[],
    ...values: string[]
   ): string;
   export default buildEncodedUri;
}
