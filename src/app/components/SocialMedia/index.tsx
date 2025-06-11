import Image, { StaticImageData } from "next/image";

type SocialMediaProps = {
    link: string;
    name: string;
    icon: StaticImageData | string;
};

export function SocialMedia({ link, name, icon }: SocialMediaProps) {
    return (
        <>
            <a
                className="flex items-center gap-2 transition-transform duration-300 hover:underline hover:underline-offset-4 hover:scale-110"
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                title={name}
                aria-label={name}
            >
                <Image
                    src={icon}
                    alt={name}
                    width={16}
                    height={16}
                    className="socials"
                />
            </a>
        </>
    );
}
