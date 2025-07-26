import { NextRequest, NextResponse } from "next/server";

export default async function authenticationMiddleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;
    const publicPaths = ["/login", "/signup", "/forgot-password"];

    if (publicPaths.some((path) => request.nextUrl.pathname.startsWith(path))) {
        console.log("public URL");
        return NextResponse.next();
    } else if (request.nextUrl.pathname === "/") {
        console.log("pathname: ", request.nextUrl.pathname);
        return NextResponse.redirect(new URL("/home", request.url));
    }

    if (!token) {
        return NextResponse.redirect(new URL("/login", request.url));
    } else {
        try {
            const response = await fetch(
                `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/v1/auth/verify-token`,
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            if (!response.ok) {
                return NextResponse.redirect(new URL("/login", request.url));
            }

            const data = await response.json();
            console.log(data);
            if (!data.success) {
                return NextResponse.redirect(new URL("/login", request.url));
            }

            const res = NextResponse.next();
            res.headers.set("x-user-id", data.userId);

            return res;
        } catch (error) {
            console.error("Error Verifying Token: ", error);
            return NextResponse.redirect(new URL("/login", request.url));
        }
    }

    // if (request.nextUrl.pathname === "/") {
    //     return NextResponse.redirect(new URL("/home", request.url));
    // }
    // if (pathname !== "/sign-in" && pathname !== "/sign-up")
    // return NextResponse.redirect(new URL("/sign-in", request.url));
    
    
    return NextResponse.next();
}

// export const config = {
//     matcher: [
//         // Skip Next.js internals and all static files, unless found in search params
//         "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
//         // Always run for API routes
//         "/(api|trpc)(.*)",
//     ],
// };

export const config = {
    matcher: [
        // Match all except static files and specific public files like manifest.json
        "/((?!_next|favicon.ico|manifest.json|icon.*\\.png|.*\\.(?:css|js|jpg|jpeg|png|svg|webp|woff2?|ttf|eot|otf|json)).*)",
        "/(api|trpc)(.*)",
    ],
};
