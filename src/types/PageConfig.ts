type certificationAreas = "US" | "CA" | "DE" | "GB" | "AU" | "BR" | "FR" | "NZ" | "IN"

export default interface PageConfig {
    image_url: string,
    certificationArea: certificationAreas
}