import React, { Suspense } from "react";

import Footer from "../../../components/Footer/Footer";
import EventCards from "../../../components/PageCard/EventCards";
import { Box, Center, Grid, styled } from "../../../styled-system/jsx";
import Loading from "../loading";

/**
 * The events page containing all the events
 *
 * @returns The page
 */
const Events: React.FC = () => {
    return (
        <>
            {/* <SEO url="https://northcs.org/events" /> */}
            <Box mt={0.5} pt={2} pb={2} bg="#95ca59">
                <styled.h2
                    color="black"
                    textAlign="center"
                    fontSize="lg"
                    whiteSpace="nowrap"
                >
                    Events
                </styled.h2>
            </Box>
            <Box bg="#dff0d8" pt={10} pb={10}>
                <Grid
                    columns={{ sm: 1, md: 1, lg: 2 }}
                    gap={10}
                    ml={10}
                    mr={10}
                >
                    <Suspense fallback={<Loading />}>
                        <EventCards />
                    </Suspense>
                </Grid>
            </Box>
            <Footer brightBg />
        </>
    );
};

export default Events;
