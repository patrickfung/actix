(function() {var implementors = {};
implementors["actix"] = [{"text":"impl&lt;A&gt; PinnedDrop for <a class=\"struct\" href=\"actix/struct.Supervisor.html\" title=\"struct actix::Supervisor\">Supervisor</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"actix/prelude/trait.Supervised.html\" title=\"trait actix::prelude::Supervised\">Supervised</a> + <a class=\"trait\" href=\"actix/prelude/trait.Actor.html\" title=\"trait actix::prelude::Actor\">Actor</a>&lt;Context = <a class=\"struct\" href=\"actix/struct.Context.html\" title=\"struct actix::Context\">Context</a>&lt;A&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["actix::supervisor::Supervisor"]},{"text":"impl&lt;A, B&gt; PinnedDrop for <a class=\"enum\" href=\"actix/fut/enum.Either.html\" title=\"enum actix::fut::Either\">Either</a>&lt;A, B&gt;","synthetic":false,"types":["actix::fut::either::Either"]},{"text":"impl&lt;A, F&gt; PinnedDrop for <a class=\"struct\" href=\"actix/fut/struct.Map.html\" title=\"struct actix::fut::Map\">Map</a>&lt;A, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"actix/fut/trait.ActorFuture.html\" title=\"trait actix::fut::ActorFuture\">ActorFuture</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::map::Map"]},{"text":"impl&lt;T, E, A&gt; PinnedDrop for <a class=\"struct\" href=\"actix/fut/struct.FutureResult.html\" title=\"struct actix::fut::FutureResult\">FutureResult</a>&lt;T, E, A&gt;","synthetic":false,"types":["actix::fut::result::FutureResult"]},{"text":"impl&lt;S, F, Fut, T&gt; PinnedDrop for <a class=\"struct\" href=\"actix/fut/struct.StreamFold.html\" title=\"struct actix::fut::StreamFold\">StreamFold</a>&lt;S, F, Fut, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;Fut: <a class=\"trait\" href=\"actix/fut/trait.IntoActorFuture.html\" title=\"trait actix::fut::IntoActorFuture\">IntoActorFuture</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::stream_fold::StreamFold"]},{"text":"impl&lt;S, F&gt; PinnedDrop for <a class=\"struct\" href=\"actix/fut/struct.StreamMap.html\" title=\"struct actix::fut::StreamMap\">StreamMap</a>&lt;S, F&gt;","synthetic":false,"types":["actix::fut::stream_map::StreamMap"]},{"text":"impl&lt;S, F:&nbsp;'static, U&gt; PinnedDrop for <a class=\"struct\" href=\"actix/fut/struct.StreamThen.html\" title=\"struct actix::fut::StreamThen\">StreamThen</a>&lt;S, F, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"actix/fut/trait.IntoActorFuture.html\" title=\"trait actix::fut::IntoActorFuture\">IntoActorFuture</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix/fut/trait.ActorStream.html\" title=\"trait actix::fut::ActorStream\">ActorStream</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::stream_then::StreamThen"]},{"text":"impl&lt;A, B, F:&nbsp;'static&gt; PinnedDrop for <a class=\"struct\" href=\"actix/fut/struct.Then.html\" title=\"struct actix::fut::Then\">Then</a>&lt;A, B, F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"actix/fut/trait.ActorFuture.html\" title=\"trait actix::fut::ActorFuture\">ActorFuture</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;B: <a class=\"trait\" href=\"actix/fut/trait.IntoActorFuture.html\" title=\"trait actix::fut::IntoActorFuture\">IntoActorFuture</a>&lt;Actor = A::<a class=\"type\" href=\"actix/fut/trait.ActorFuture.html#associatedtype.Actor\" title=\"type actix::fut::ActorFuture::Actor\">Actor</a>&gt;,&nbsp;</span>","synthetic":false,"types":["actix::fut::then::Then"]},{"text":"impl&lt;F&gt; PinnedDrop for <a class=\"struct\" href=\"actix/fut/struct.Timeout.html\" title=\"struct actix::fut::Timeout\">Timeout</a>&lt;F&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"actix/fut/trait.ActorFuture.html\" title=\"trait actix::fut::ActorFuture\">ActorFuture</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::timeout::Timeout"]},{"text":"impl&lt;F, A&gt; PinnedDrop for <a class=\"struct\" href=\"actix/fut/struct.FutureWrap.html\" title=\"struct actix::fut::FutureWrap\">FutureWrap</a>&lt;F, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;F: <a class=\"trait\" href=\"actix/prelude/trait.Future.html\" title=\"trait actix::prelude::Future\">Future</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::FutureWrap"]},{"text":"impl&lt;S, A&gt; PinnedDrop for <a class=\"struct\" href=\"actix/fut/struct.StreamWrap.html\" title=\"struct actix::fut::StreamWrap\">StreamWrap</a>&lt;S, A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;S: <a class=\"trait\" href=\"actix/prelude/trait.Stream.html\" title=\"trait actix::prelude::Stream\">Stream</a>,&nbsp;</span>","synthetic":false,"types":["actix::fut::StreamWrap"]},{"text":"impl&lt;A&gt; PinnedDrop for <a class=\"struct\" href=\"actix/sync/struct.SyncArbiter.html\" title=\"struct actix::sync::SyncArbiter\">SyncArbiter</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"actix/prelude/trait.Actor.html\" title=\"trait actix::prelude::Actor\">Actor</a>&lt;Context = <a class=\"struct\" href=\"actix/sync/struct.SyncContext.html\" title=\"struct actix::sync::SyncContext\">SyncContext</a>&lt;A&gt;&gt;,&nbsp;</span>","synthetic":false,"types":["actix::sync::SyncArbiter"]}];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        })()