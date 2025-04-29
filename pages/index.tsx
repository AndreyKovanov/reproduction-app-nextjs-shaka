import { VideoPlayer } from '@/src/VideoPlayer';

const STREAM_MANIFEST = 'https://shaka-player-test.s3.ap-south-1.amazonaws.com/video/video.m3u8';

/** Add your relevant code here for the issue to reproduce */
export default function Home() {
  return <div><VideoPlayer src={STREAM_MANIFEST} /></div>;
}
