import { useMediaQuery } from "react-responsive";

const Roadmap = () => {
    const isDesktopOrLaptop = useMediaQuery({
        query: "(min-width: 768px)",
    });

    return (
        <section className="roadmap-section" id="roadmap">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 pb-20">
                        <div className="main-head">
                            <h2 data-aos="fade-up"
                                data-aos-duration="2000">Our Roadmap to Commence & Scale</h2>
                            <span className="main-bor"></span>
                        </div>
                    </div>
                </div>
                <div className="roadmap-body">
                    {isDesktopOrLaptop && <table>
                        <thead>
                            <tr>
                                <th className="col-sm-3">
                                    <div className="d-flex title">
                                        <div>Goal Segment</div>
                                    </div>
                                </th>
                                <th className="col-sm-3">
                                    <div className="d-flex title">
                                        <div>Short Term (2023)</div>
                                    </div>
                                </th>
                                <th className="col-sm-3">
                                    <div className="d-flex title">
                                        <div>Mid Term (2024-2025)</div>
                                    </div>
                                </th>
                                <th className="col-sm-3">
                                    <div className="d-flex title">
                                        <div>Long Term (2026-2027)</div>
                                    </div>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="col-sm-3">
                                    <div className="d-flex item gap-10">
                                        <div><img src="/images/token-tokens.png" alt="" height="20px" /></div>
                                        <div>ICO Funding</div>
                                    </div>
                                </td>
                                <td className="col-sm-3">
                                    <div className="item">
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>First ICO: $10 million (Jan 2023)</div>
                                        </div>
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>Second ICO: $15 million (July 2023)</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="col-sm-3">
                                    <div className="item">
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>Third ICO: $20 million (Oct 2024)</div>
                                        </div>
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>Fourth ICO: $50million (Jan 2025)</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="col-sm-3">
                                    <div className="item">
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>Raise additional funding if required</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-sm-3">
                                    <div className="d-flex item gap-10">
                                        <div><img src="/images/people.png" alt="" height="20px" /></div>
                                        <div>Users & Sellers</div>
                                    </div>
                                </td>
                                <td className="col-sm-3">
                                    <div className="item">
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>Users: 6,000,000+</div>
                                        </div>
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>Sellers: 2,300+</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="col-sm-3">
                                    <div className="item">
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>Users: 48,000,000+</div>
                                        </div>
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>Sellers: 31,000+</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="col-sm-3">
                                    <div className="item">
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>Users: 6,000,000+</div>
                                        </div>
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>Sellers: 2,300+</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-sm-3">
                                    <div className="d-flex item gap-10">
                                        <div><img src="/images/capital.png" alt="" height="20px" /></div>
                                        <div>Synergy Venture Capital</div>
                                    </div>
                                </td>
                                <td className="col-sm-3">
                                    <div className="item">
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>Establish Synergy Venture Capital</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="col-sm-3">
                                    <div className="item">
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>Number of projects invested</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="col-sm-3">
                                    <div className="item">
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>Number of projects invested</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-sm-3">
                                    <div className="d-flex item gap-10">
                                        <div><img src="/images/people.png" alt="" height="20px" /></div>
                                        <div>Team</div>
                                    </div>
                                </td>
                                <td className="col-sm-3">
                                    <div className="item">
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>Hiring of Technical team and C-Level Management</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="col-sm-3">
                                    <div className="item">
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>Expansion of technical marketing and business development team along with hiring of support resources</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="col-sm-3">
                                    <div className="item">
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>Additional hiring of technical and support team</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                            <tr>
                                <td className="col-sm-3">
                                    <div className="d-flex item gap-10">
                                        <div><img src="/images/revenue.png" alt="" height="20px" /></div>
                                        <div>Revenue & Operating Profits</div>
                                    </div>
                                </td>
                                <td className="col-sm-3">
                                    <div className="item">
                                    </div>
                                </td>
                                <td className="col-sm-3">
                                    <div className="item">
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>+500 million revenues with net profit of $450 million+ (year 3 of operations)</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="col-sm-3">
                                    <div className="item">
                                        <div className="d-flex gap-10">
                                            <div>&bull;</div>
                                            <div>+500 million revenues with net profit of $450 million+ (year 3 of operations)</div>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>}
                    {
                        !isDesktopOrLaptop && <div className="mobile-tokenomics">
                            <div className="roadmap-grp p-20">
                                <div className="d-flex title col-xs-12">
                                    <div className="col-xs-12">
                                        <div className="d-flex gap-10">
                                            <div><img src="/images/token-tokens.png" alt="" height="30px" /></div>
                                            <div>ICO Funding</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-container">
                                    <div className="item col-xs-12">
                                        <div className="d-flex">
                                            <div className="item-title">Short Term</div>
                                        </div>
                                        <div className="item-body">
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>First ICO: $10 million (Jan 2023)</div>
                                            </div>
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>Second ICO: $15 million (July 2023)</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item col-xs-12">
                                        <div className="d-flex">
                                            <div className="item-title">Mid Term (2024-2025)</div>
                                        </div>
                                        <div className="item-body">
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>Third ICO: $20 million (Oct 2024)</div>
                                            </div>
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>Fourth ICO: $50million (Jan 2025)</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item col-xs-12">
                                        <div className="d-flex">
                                            <div className="item-title">Long Term (2026-2027)</div>
                                        </div>
                                        <div className="item-body">
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>Raise additional funding if required</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="roadmap-grp p-20">
                                <div className="d-flex title col-xs-12">
                                    <div className="col-xs-12">
                                        <div className="d-flex gap-10">
                                            <div><img src="/images/people.png" alt="" height="30px" /></div>
                                            <div>Users & Sellers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-container">
                                    <div className="item col-xs-12">
                                        <div className="d-flex">
                                            <div className="item-title">Short Term</div>
                                        </div>
                                        <div className="item-body">
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>Users: 6,000,000+</div>
                                            </div>
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>Sellers: 2,300+</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item col-xs-12">
                                        <div className="d-flex">
                                            <div className="item-title">Mid Term (2024-2025)</div>
                                        </div>
                                        <div className="item-body">
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>Users: 48,000,000+</div>
                                            </div>
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>Sellers: 31,000+</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item col-xs-12">
                                        <div className="d-flex">
                                            <div className="item-title">Long Term (2026-2027)</div>
                                        </div>
                                        <div className="item-body">
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>Users: 6,000,000+</div>
                                            </div>
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>Sellers: 2,300+</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="roadmap-grp p-20">
                                <div className="d-flex title col-xs-12">
                                    <div className="col-xs-12">
                                        <div className="d-flex gap-10">
                                            <div><img src="/images/capital.png" alt="" height="30px" /></div>
                                            <div>Users & Sellers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-container">
                                    <div className="item col-xs-12">
                                        <div className="d-flex">
                                            <div className="item-title">Short Term</div>
                                        </div>
                                        <div className="item-body">
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>Establish Synergy Venture Capital</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item col-xs-12">
                                        <div className="d-flex">
                                            <div className="item-title">Mid Term (2024-2025)</div>
                                        </div>
                                        <div className="item-body">
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>Number of projects invested</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item col-xs-12">
                                        <div className="d-flex">
                                            <div className="item-title">Long Term (2026-2027)</div>
                                        </div>
                                        <div className="item-body">
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>Number of projects invested</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="roadmap-grp p-20">
                                <div className="d-flex title col-xs-12">
                                    <div className="col-xs-12">
                                        <div className="d-flex gap-10">
                                            <div><img src="/images/people.png" alt="" height="30px" /></div>
                                            <div>Users & Sellers</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-container">
                                    <div className="item col-xs-12">
                                        <div className="d-flex">
                                            <div className="item-title">Short Term</div>
                                        </div>
                                        <div className="item-body">
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>Hiring of Technical team and C-Level Management</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item col-xs-12">
                                        <div className="d-flex">
                                            <div className="item-title">Mid Term (2024-2025)</div>
                                        </div>
                                        <div className="item-body">
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>Expansion of technical marketing and business development team along with hiring of support resources</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item col-xs-12">
                                        <div className="d-flex">
                                            <div className="item-title">Long Term (2026-2027)</div>
                                        </div>
                                        <div className="item-body">
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>Additional hiring of technical and support team</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="roadmap-grp p-20">
                                <div className="d-flex title col-xs-12">
                                    <div className="col-xs-12">
                                        <div className="d-flex gap-10">
                                            <div><img src="/images/revenue.png" alt="" height="30px" /></div>
                                            <div>Revenue & Operating Profits</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item-container">
                                    <div className="item col-xs-12">
                                        <div className="d-flex">
                                            <div className="item-title">Mid Term (2024-2025)</div>
                                        </div>
                                        <div className="item-body">
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>+500 million revenues with net profit of $450 million+ (year 3 of operations)</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="item col-xs-12">
                                        <div className="d-flex">
                                            <div className="item-title">Long Term (2026-2027)</div>
                                        </div>
                                        <div className="item-body">
                                            <div className="d-flex gap-10">
                                                <div>&bull;</div>
                                                <div>+500 million revenues with net profit of $450 million+ (year 3 of operations)</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
