import "./navbar.css"

export interface NavBarPropsNavLinks {
    name: string;
    link: string;
}

export interface NavBarProps {
    title: string;
    navigationsLinks: NavBarPropsNavLinks[]
}

export default function Navbar(props: NavBarProps) {

    return (
        <nav>
            <div className="frame board-3bde9cb0cc3c">
                {/* Group */}
                <div className="frame group-3be29e368f6e">
                    {/* NavBar Text */}
                    <div className="shape text nav-bar-tex-3bdff4288408">
                        <div
                            className="text-node-html"
                            id="html-text-node-b522ae66-a5fa-8059-8006-3bdff4288408"
                            data-x="403"
                            data-y="350.5"
                        >
                            <div
                                className="root rich-text root-0"
                                style={{
                                    display: 'flex',
                                    whiteSpace: 'break-spaces',
                                    alignItems: 'flex-start',
                                }}
                                // @ts-expect-error TS2322
                                xmlns="http://www.w3.org/1999/xhtml"
                            >
                                <div className="paragraph-set root-0-paragraph-set-0">
                                    <p className="paragraph root-0-paragraph-set-0-paragraph-0" dir="ltr">
                                      <span
                                          className="text-node root-0-paragraph-set-0-paragraph-0-text-0"
                                          style={{
                                              color: 'rgba(0, 0, 0, 1)',
                                              textTransform: 'none',
                                              lineBreak: 'auto',
                                              overflowWrap: 'initial',
                                              whiteSpace: 'pre',
                                              fontSize: '24px',
                                              textRendering: 'geometricPrecision',
                                              caretColor: 'rgba(0, 0, 0, 1)',
                                              textDecoration: 'none',
                                              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                              // @ts-ignore
                                              '--font-id': 'gfont-fjord-one',
                                              // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                                              // @ts-ignore
                                              '--fills': '[[\\"^ \\",\\":fill-color\\",\\"#000000\\",\\":fill-opacity\\",1]]',
                                              letterSpacing: '0px',
                                              fontFamily: '"Fjord One"',
                                              fontStyle: 'normal',
                                              fontWeight: '400',
                                          }}
                                      >
                                        {props.title}
                                      </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Group */}
                    <div className="frame group-3bdf1bfa0596">
                        {/* Rectangle */}
                        <div className="shape rect rectangle-3bdf069066f1"></div>
                        {/* Rectangle */}
                        <div className="shape rect rectangle-3bdf0484a64d"></div>
                        {/* Rectangle */}
                        <div className="shape rect rectangle-3bdef56b8fb6"></div>
                    </div>
                </div>
            </div>
        </nav>
    )
}