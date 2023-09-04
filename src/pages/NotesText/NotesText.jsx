import { Button } from "antd";
import Container from "../shared/Container";


const NotesText = () => {
    return (
        <div className="bg-gray-200 font-poppins">
            <div className="pt-10 space-y-5 mb-8">
                <h1 className="text-blue-950 text-center font-semibold text-4xl">A versatile rich text editor for all your needs</h1>
                <p className="text-center text-gray-700">Likho Editor 7.1 empowers users to create diverse content in your app—documents, <br /> reports, emails, notes, and chats with ease.</p>

                <div className="flex justify-center items-center flex-wrap gap-4">
                    <button className="text-lg font-poppins px-4 bg-purple-700 hover:bg-purple-800 text-center text-white p-2 rounded-lg">Take Explore</button>
                    <button className="text-lg font-poppins px-4 hover:bg-blue-100 text-center text-gray-700 font-semibold border border-gray-500 p-2 rounded-lg">Docs Know</button>
                </div>
            </div>

            <Container>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 justify-center items-center pb-14">
                    <img className="h-auto sm:h-3/4 border-1 border-black" src="https://i.ibb.co/dgm8CDV/Untitled-1.png" alt="" />
                    <div className="p-4">
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" checked="checked" />
                            <div className="collapse-title text-3xl text-blue-950 font-medium">
                                Multipurpose
                            </div>
                            <div className="collapse-content">
                                <p>Likho Editor 7.1, the adaptable WYSIWYG HTML editor, suits a broad spectrum of applications. Whether it's creating comprehensive Word-like documents or streamlining toolbars for emails and instant messaging, it's got you covered.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-3xl text-blue-950 font-medium">
                                User friendly
                            </div>
                            <div className="collapse-content">
                                <p>Take advantage of seamless UX and modern UI with lots of productivity features, such as @mentions, auto-formatting, spell checking, keyboard support, and copy-pasting from MS Word.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-3xl text-blue-950 font-medium">
                                Features
                            </div>
                            <div className="collapse-content">
                                <p>Effortlessly edit documents with our feature-rich editor. Enjoy a seamless experience with tools for text formatting, real-time collaboration, version history tracking, and more. Whether it's creating reports, letters, or any text-based content, our editor simplifies the process and enhances productivity.</p>
                            </div>
                        </div>
                        <div className="collapse collapse-plus">
                            <input type="radio" name="my-accordion-3" />
                            <div className="collapse-title text-3xl text-blue-950 font-medium">
                                How It Helps Users.
                            </div>
                            <div className="collapse-content">
                                <p>Our document editing tools are designed with you in mind. Streamline your work, collaborate efficiently, and stay organized with features that help you create, edit, and manage documents effortlessly. Whether you're a student, professional, or anyone who works with documents, our user-friendly tools are here to make your tasks simpler and more productive.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default NotesText;
