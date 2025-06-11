import { SocialMedia } from "../SocialMedia";
import linkedin from "../../../../public/img/linkedin.svg";
import github from "../../../../public/img/github.svg";
import instagram from "../../../../public/img/instagram.svg";

export default function Footer() {
    return (
        <>
            <footer className="footer pt-3 pb-3">
                <div className="container row-start-3 flex flex-col gap-[24px] flex-wrap items-center justify-center">
                    <div className="flex items-center justify-center gap-[24px]">
                        <SocialMedia
                            link="https://www.linkedin.com/in/luishenriquesc/"
                            name="Linkedin"
                            icon={linkedin}
                        />
                        <SocialMedia
                            link="https://github.com/luisitcho/"
                            name="GitHub"
                            icon={github}
                        />
                        <SocialMedia
                            link="https://www.instagram.com/luisitcho/"
                            name="Instagram"
                            icon={instagram}
                        />
                    </div>

                    <span className="text-sm">
                        © 2025 - Todos os direitos reservados
                    </span>
                </div>
            </footer>
        </>
    );
}
