import { NextResponse } from "next/server";
import { revalidateTag } from "next/cache";
import { parseBody } from "next-sanity/webhook";

export async function POST(req) {
    try {
      const body = await parseBody(req, process.env.SANITY_REVALIDATE_SECRET);
  
      if (!body) {
        const message = 'Empty body received';
        return new Response(JSON.stringify({ message }), { status: 400 });
      }
  
      if (body?._type) {
        revalidateTag(body._type);
      } else {
        const message = 'Missing _type field in the body';
        return new Response(JSON.stringify({ message, body }), { status: 400 });
      }
  
      return NextResponse.json({ revalidated: true, now: Date.now(), body });
    } catch (error) {
      console.error('Error processing webhook:', error);
      return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }
  }